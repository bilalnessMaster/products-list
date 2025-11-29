import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { productRouter } from '@/models/products/server/procedure';
export const appRouter = createTRPCRouter({
  products: productRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
