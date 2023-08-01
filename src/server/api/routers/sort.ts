import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const sortRouter = createTRPCRouter({
  sortFilter: publicProcedure.input(z.object({
    filterType: z.string()
  })).query(({ ctx, input }) => {

    if (input.filterType == "rasc")
      return ctx.prisma.car.findMany({
        orderBy: {
          retail: "asc"
        }
      });

    if (input.filterType == "rdesc")
    return ctx.prisma.car.findMany({
      orderBy: {
        retail: "desc"
      }
    });

    if (input.filterType == "masc") 
    return ctx.prisma.car.findMany({
      orderBy: {
        mileage: "asc"
      }
    })

    if (input.filterType == "mdesc") 
    return ctx.prisma.car.findMany({
      orderBy: {
        mileage: "desc"
      }
    })

    return (
      ctx.prisma.car.findMany()
    )

  }),
});
