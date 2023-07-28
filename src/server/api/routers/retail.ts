import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const retailRouter = createTRPCRouter({
  retailFilter: publicProcedure.input(z.object({
    filterType: z.string()
  })).query(({ ctx, input }) => {
    if (input.filterType != "asc")
      return ctx.prisma.car.findMany({
        orderBy: {
          retail: "desc"
        }
      });
    return ctx.prisma.car.findMany({
      orderBy: {
        retail: "asc"
      }
    });
  }),
});
