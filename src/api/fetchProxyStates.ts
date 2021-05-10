import type { State } from "@/types"

export type ProxyStatesResponse = Readonly<{
  statusCode?: string
  message?: string
  description?: string
  result?: State[]
}>

export const fetchProxyStates: () => Promise<ProxyStatesResponse> = () =>
  fetch(`/api/v1/states`).then((r) => r.json() as Promise<ProxyStatesResponse>)
