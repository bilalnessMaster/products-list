import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '@/trpc/server';
import { useQueryHook } from '../../states/use-query';
import { ProductsList } from '../components/products-list';

export default async function ProductView() {

  return (
    <div>
      <ProductsList />
    </div>
  );
}
