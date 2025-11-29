import { useQueryStates } from 'nuqs';
import { parseAsString, createLoader } from 'nuqs/server'

export const searchParams = {
  query: parseAsString.withOptions({
    clearOnDefault: true
  }),
}


export const useQueryHook = () => {
  return useQueryStates(searchParams);
}


export const loaderStates = createLoader(searchParams)
