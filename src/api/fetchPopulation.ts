export interface Data {
  readonly year: number
  readonly value: number
}

export interface Label {
  readonly label: string
  readonly data: Data[]
}

export interface Result {
  readonly boundaryYear: number
  readonly data: Label[]
}

export interface PopulationResponse {
  readonly statusCode?: string
  readonly message?: string
  readonly description?: string
  readonly result?: Result
}

export const fetchPopulation: (
  stateCode?: number | string
) => Promise<PopulationResponse> = (stateCode) =>
  fetch(
    `${process.env.API_URL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${stateCode}`,
    {
      headers: {
        "X-API-KEY": process.env.API_KEY as string,
      },
    }
  ).then((r) => r.json() as Promise<PopulationResponse>)

export const fetchProxyPopulation: (
  stateCode?: number | string
) => Promise<PopulationResponse> = (stateCode) =>
  fetch(`/api/v1/population?stateID=${stateCode}`).then(
    (r) => r.json() as Promise<PopulationResponse>
  )
