import { createTRPCRouter } from "~/server/api/trpc";
import { carRouter } from "./routers/car";
import { retailRouter } from "./routers/retail";
import { appendCarRouter } from "./routers/appendCar";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  car: carRouter,
  appendCar: appendCarRouter,
  retailQuery: retailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
