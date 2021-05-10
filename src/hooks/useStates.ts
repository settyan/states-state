import { fetchProxyStates, ProxyStatesResponse } from "@/api/fetchProxyStates"
import useSWR from "swr"
import type { SWRConfiguration } from "swr"

export const useStates = (
  config?: SWRConfiguration<ProxyStatesResponse>
): [ProxyStatesResponse["result"], unknown, boolean] => {
  const { data, error, isValidating } = useSWR<ProxyStatesResponse, unknown>(
    "/api/v1/states",
    fetchProxyStates,
    config
  )

  return [data?.result, error, isValidating]
}
