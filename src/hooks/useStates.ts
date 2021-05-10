import { fetchProxyStates } from "@/api/fetchProxyStates"
import type { StatesResponse } from "@/api/fetchStates"
import useSWR from "swr"
import type { SWRConfiguration } from "swr"

export const useStates = (
  config?: SWRConfiguration<StatesResponse>
): [StatesResponse["result"], unknown, boolean] => {
  const { data, error, isValidating } = useSWR<StatesResponse, unknown>(
    "/api/v1/states",
    fetchProxyStates,
    config
  )

  const states = data?.result

  return [states, error, isValidating]
}
