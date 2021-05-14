import type { State } from "@/types"

export interface StatesResponse {
  statusCode?: string
  message?: string
  description?: string
  result?: State[]
}

export const fetchStates: () => Promise<StatesResponse> = () =>
  fetch(`${process.env.API_URL}/api/v1/prefectures`, {
    headers: {
      "X-API-KEY": process.env.API_KEY as string,
    },
  }).then((r) => r.json() as Promise<StatesResponse>)

export const fetchProxyStates: () => Promise<StatesResponse> = () =>
  fetch(`/api/v1/states`).then((r) => r.json() as Promise<StatesResponse>)
