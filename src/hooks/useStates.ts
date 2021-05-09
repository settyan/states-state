import { fetchStates } from "@/api/fetchStates"
import type { StatesResponse } from "@/api/fetchStates"
import useSWR from "swr"
import type { SWRConfiguration } from "swr"

export const useStates = (
  config?: SWRConfiguration<StatesResponse>
): [StatesResponse["result"], unknown, boolean] => {
  const { data, error, isValidating } = useSWR<StatesResponse, unknown>(
    "/api/v1/prefectures",
    fetchStates,
    config
  )

  return [data?.result, error, isValidating]
}
