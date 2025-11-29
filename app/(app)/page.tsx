import { loaderStates } from "@/models/products/states/use-query";
import ProductView from "@/models/products/ui/view/product-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { SearchParams } from "nuqs";



export default async function Home() {
  const queryClient = getQueryClient();
  const States = await loaderStates(SearchParams)
  void queryClient.prefetchQuery(trpc.products.getProducs.queryOptions({
    query: States.query as string
  }));

  return (
    <ProductView />
  );
}
