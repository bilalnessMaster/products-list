'use client'

import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

export function Demo() {
  const trpc = useTRPC()
  const [name, setName] = useQueryState('name')
  const { data: products } = useQuery(trpc.hello.queryOptions({
    text: 'bilal'
  }))
  return (
    <div className='mx-auto max-w-xl '>
      <input value={name || ''} onChange={e => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || 'anonymous visitor'}!</p>
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
