import type { State } from "@/types"

export type StatesResponse = Readonly<{
  statusCode?: string
  message?: string
  description?: string
  result?: State[]
}>

export const fetchStates: () => Promise<StatesResponse> = () =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/prefectures`, {
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
    },
  }).then((r) => r.json() as Promise<StatesResponse>)
