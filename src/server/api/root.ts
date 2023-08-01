import { createTRPCRouter } from "~/server/api/trpc";
import { carRouter } from "./routers/car";
import { sortRouter } from "./routers/sort";
import { appendCarRouter } from "./routers/appendCar";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  car: carRouter,
  appendCar: appendCarRouter,
  retailQuery: sortRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
