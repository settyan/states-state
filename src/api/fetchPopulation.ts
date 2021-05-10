export type Data = Readonly<{
  year: number
  value: number
}>

export type Label = Readonly<{
  label: string
  data: Data[]
}>

export type Result = Readonly<{
  boundaryYear: number
  data: Label[]
}>

export type PopulationResponse = Readonly<{
  statusCode?: string
  message?: string
  description?: string
  result?: Result
}>

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
