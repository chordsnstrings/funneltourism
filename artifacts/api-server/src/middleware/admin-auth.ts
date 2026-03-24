import type { Request, Response, NextFunction } from "express";
import { logger } from "../lib/logger";

const ADMIN_PASSWORD = process.env["ADMIN_PASSWORD"];

if (!ADMIN_PASSWORD) {
  if (process.env["NODE_ENV"] === "production") {
    logger.error("ADMIN_PASSWORD environment variable is required in production");
    process.exit(1);
  } else {
    logger.warn("ADMIN_PASSWORD not set — defaulting to 'admin123' (development only)");
  }
}

const effectivePassword = ADMIN_PASSWORD || "admin123";

export function adminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized", message: "Authentication required" });
    return;
  }

  const token = authHeader.slice(7);

  if (token !== effectivePassword) {
    res.status(403).json({ error: "Forbidden", message: "Invalid credentials" });
    return;
  }

  next();
}
