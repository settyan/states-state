import type { PopulationResponse } from "./fetchPopulation"

export const fetchProxyPopulation: (
  stateCode?: number | string
) => Promise<PopulationResponse> = (stateCode) =>
  fetch(`/api/v1/population?stateID=${stateCode}`).then(
    (r) => r.json() as Promise<PopulationResponse>
  )
