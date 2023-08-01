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

    if (input.filterType == "fasc") 
    return ctx.prisma.car.findMany({
      orderBy: {
        fuel: "desc"
      }
    })

    if (input.filterType == "fdesc") 
    return ctx.prisma.car.findMany({
      orderBy: {
        fuel: "asc"
      }
    })

    if (input.filterType == "tdesc") 
    return ctx.prisma.car.findMany({
      orderBy: {
        mileage: "desc"
      }
    })

    if (input.filterType == "tasc") 
    return ctx.prisma.car.findMany({
      orderBy: {
        mileage: "asc"
      }
    })

    return (
      ctx.prisma.car.findMany()
    )

  }),
});
