import type { PopulationResponse, Data } from "@/api/fetchPopulation"
import { fetchProxyPopulation } from "@/api/fetchProxyPopulation"
import useSWR from "swr"
import type { SWRConfiguration } from "swr"

export const usePopulation = (
  stateID?: number | string,
  config?: SWRConfiguration<PopulationResponse>
): [Data[] | undefined, unknown, boolean] => {
  const { data, error, isValidating } = useSWR<PopulationResponse, unknown>(
    "/api/v1/population",
    () => fetchProxyPopulation(stateID),
    config
  )

  const population = data?.result?.data.find((item) => item.label === "総人口")
    ?.data

  return [population, error, isValidating]
}
