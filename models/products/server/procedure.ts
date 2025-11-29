


import { z } from 'zod';
import { Where } from 'payload';
import { baseProcedure, createTRPCRouter } from '@/trpc/init';
export const productRouter = createTRPCRouter({
  getProducs: baseProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      console.log("query", input.query)
      let where: Where = {}



      if (input.query) {
        const regex = {
          like: input.query,       
        }

        where = {
          or: [
            { name_fr: regex },
            { name_ar: regex },
            { ref: regex }
          ]
        }
      }

      const products = await ctx.db.find({
        collection: 'products',
        where,
        depth: 2,
      })
      // console.log("products : ", products)
      return {
        greeting: `hello ${input.query}`,
        products: products?.docs
      };
    }),
});



