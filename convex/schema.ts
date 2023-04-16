import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
    Menu: defineTable({
        Restaurant: s.string(),
        Dish: s.string(),
        Price: s.number(),
        Stars: s.number(),
        Description: s.string(),
    }).index("Description", ["Description"])
});