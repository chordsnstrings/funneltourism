import { Router, type IRouter } from "express";
import { db, packagesTable } from "@workspace/db";
import { eq, and, sql } from "drizzle-orm";

const router: IRouter = Router();

router.get("/packages", async (req, res) => {
  try {
    const destination = req.query.destination as string | undefined;
    const category = req.query.category as string | undefined;

    const conditions = [];
    if (destination && destination !== "all") {
      conditions.push(eq(packagesTable.destination, destination));
    }
    if (category && category !== "all") {
      conditions.push(eq(packagesTable.category, category));
    }

    const whereClause = conditions.length === 0
      ? undefined
      : conditions.length === 1
      ? conditions[0]
      : and(...conditions);

    const data = await db
      .select()
      .from(packagesTable)
      .where(whereClause)
      .orderBy(packagesTable.isFeatured, packagesTable.isPopular, packagesTable.id);

    res.json({ data, total: data.length });
  } catch (err) {
    console.error("Error fetching packages:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/packages/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const [pkg] = await db
      .select()
      .from(packagesTable)
      .where(eq(packagesTable.slug, slug));

    if (!pkg) {
      res.status(404).json({ error: "Not found", message: "Package not found" });
      return;
    }

    res.json(pkg);
  } catch (err) {
    console.error("Error fetching package:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
