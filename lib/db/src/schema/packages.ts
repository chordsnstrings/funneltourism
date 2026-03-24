import { pgTable, text, serial, integer, boolean, real, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const packagesTable = pgTable("packages", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  destination: text("destination").notNull(),
  category: text("category").notNull(),
  duration: text("duration").notNull(),
  price: real("price").notNull(),
  currency: text("currency").default("AED").notNull(),
  maxGroupSize: integer("max_group_size").default(15).notNull(),
  highlights: jsonb("highlights").$type<string[]>().default([]).notNull(),
  includes: jsonb("includes").$type<string[]>().default([]).notNull(),
  excludes: jsonb("excludes").$type<string[]>().default([]).notNull(),
  itinerary: jsonb("itinerary").$type<string[]>().default([]).notNull(),
  imageUrl: text("image_url"),
  badge: text("badge"),
  isPopular: boolean("is_popular").default(false).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  rating: real("rating").default(4.8).notNull(),
  reviewCount: integer("review_count").default(0).notNull(),
  seoTitle: text("seo_title").notNull(),
  seoDescription: text("seo_description").notNull(),
  seoKeywords: text("seo_keywords").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPackageSchema = createInsertSchema(packagesTable).omit({ id: true, createdAt: true });
export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type Package = typeof packagesTable.$inferSelect;
