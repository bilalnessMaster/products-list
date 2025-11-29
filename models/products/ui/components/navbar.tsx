'use client'

import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'
import { useQueryHook } from '../../states/use-query'
import { Input } from '@/components/ui/input'
import { CircleX } from 'lucide-react'

export function Demo() {
  const trpc = useTRPC()
  const [States, setStates] = useQueryHook()
  //   const { data: products } = useQuery(trpc..queryOptions({
  //  text: 'bilal'
  //  }))
  return (
    <div className='mx-auto max-w-xl  border-b-2 border-neutral-50 pt-5 '>
      <div className='relative  '>
        {
          States?.query && (
            <button
              onClick={() => setStates(c => ({ ...c, query: null }))}
              className='absolute right-2 inset-y-0 text-neutral-400 hover:text-neutral-500 cursor-pointer transition-all duration-300'
            >
              <CircleX size={20} />
            </button>
          )
        }
        <Input value={States?.query || ''} onChange={e => setStates(c => ({ ...c, query: e.target.value }))} className='h-10 bg-neutral-100' />
      </div>
    </div>
  )
}
