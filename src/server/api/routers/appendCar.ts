import { createInputMiddleware } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const appendCarRouter = createTRPCRouter({
   appendCar: publicProcedure.input(z.object({
      image: z.string(),
      year: z.number(),
      model: z.string(),
      retail: z.number(),
      mileage: z.number(),
      fuel: z.string(),
      transmition: z.string(),
      features: z.string(),
   })).mutation(async ({ ctx, input }) => {

      await ctx.prisma.car.create({
         data: {
            image: input.image,
            year: input.year,
            model: input.model,
            retail: input.retail,
            mileage: input.mileage,
            fuel: input.fuel,
            transmition: input.transmition,
            features: input.features,
            sold: false,
         },
      });

   }),
});