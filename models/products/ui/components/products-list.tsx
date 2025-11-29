'use client'
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useQueryHook } from "../../states/use-query";


export const ProductsList = () => {
  const [States, _] = useQueryHook()
  const trpc = useTRPC();
  const { data: products } = useQuery(trpc
    .products
    .getProducs
    .queryOptions({
      query: States.query as string
    }));
  return (
    <div>
      <pre>
        <code>
          {
            JSON.stringify(products?.products, null, 2)
          }
        </code>
      </pre>
    </div>
  )
}
