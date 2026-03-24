import { Router, type IRouter } from "express";
import { db, leadsTable } from "@workspace/db";
import { eq, desc, count, sql } from "drizzle-orm";
import {
  CreateLeadBody,
  UpdateLeadStatusBody,
} from "@workspace/api-zod";
import { adminAuth } from "../middleware/admin-auth";
import { leadSubmitLimiter } from "../middleware/rate-limit";

const router: IRouter = Router();

router.post("/leads", leadSubmitLimiter, async (req, res) => {
  try {
    const parseResult = CreateLeadBody.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: "Validation error", message: parseResult.error.message });
      return;
    }

    const data = parseResult.data;

    const [lead] = await db
      .insert(leadsTable)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone,
        packageId: data.packageId ?? null,
        packageName: data.packageName ?? null,
        destination: data.destination ?? null,
        travelDate: data.travelDate ?? null,
        groupSize: data.groupSize ?? null,
        message: data.message ?? null,
        source: data.source ?? "website",
        status: "new",
      })
      .returning();

    res.status(201).json(lead);
  } catch (err) {
    req.log.error({ err }, "Error creating lead");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/leads", adminAuth, async (req, res) => {
  try {
    const status = req.query.status as string | undefined;
    const limit = Math.min(Number(req.query.limit) || 50, 200);
    const offset = Number(req.query.offset) || 0;

    const conditions = [];
    if (status && ["new", "contacted", "converted", "closed"].includes(status)) {
      conditions.push(eq(leadsTable.status, status as "new" | "contacted" | "converted" | "closed"));
    }

    const [{ total }] = await db
      .select({ total: count() })
      .from(leadsTable)
      .where(conditions.length ? sql`${conditions[0]}` : undefined);

    const data = await db
      .select()
      .from(leadsTable)
      .where(conditions.length ? sql`${conditions[0]}` : undefined)
      .orderBy(desc(leadsTable.createdAt))
      .limit(limit)
      .offset(offset);

    res.json({ data, total: Number(total), limit, offset });
  } catch (err) {
    req.log.error({ err }, "Error fetching leads");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/leads/:id", adminAuth, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    const [lead] = await db.select().from(leadsTable).where(eq(leadsTable.id, id));

    if (!lead) {
      res.status(404).json({ error: "Not found", message: "Lead not found" });
      return;
    }

    res.json(lead);
  } catch (err) {
    req.log.error({ err }, "Error fetching lead");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/leads/:id", adminAuth, async (req, res) => {
  try {
    const id = parseInt(String(req.params.id), 10);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid ID" });
      return;
    }

    const parseResult = UpdateLeadStatusBody.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: "Validation error", message: parseResult.error.message });
      return;
    }

    const { status, notes } = parseResult.data;

    const [updated] = await db
      .update(leadsTable)
      .set({
        status,
        notes: notes ?? undefined,
        updatedAt: new Date(),
      })
      .where(eq(leadsTable.id, id))
      .returning();

    if (!updated) {
      res.status(404).json({ error: "Not found", message: "Lead not found" });
      return;
    }

    res.json(updated);
  } catch (err) {
    req.log.error({ err }, "Error updating lead");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
