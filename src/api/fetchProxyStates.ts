import type { StatesResponse } from "./fetchStates"

export const fetchProxyStates: () => Promise<StatesResponse> = () =>
  fetch(`/api/v1/states`).then((r) => r.json() as Promise<StatesResponse>)
