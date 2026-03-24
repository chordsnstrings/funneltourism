import { Router, type IRouter } from "express";
import { db, leadsTable } from "@workspace/db";
import { eq, desc, count, sql } from "drizzle-orm";
import {
  CreateLeadBody,
  UpdateLeadStatusBody,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
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
});

router.get("/leads", async (req, res) => {
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
});

router.get("/leads/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
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
});

router.patch("/leads/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
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
});

export default router;
