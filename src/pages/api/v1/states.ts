import { fetchStates, StatesResponse } from "@/api/fetchStates"
import type { NextApiHandler } from "next"

const states: NextApiHandler<StatesResponse> = async (_req, res) => {
  const data = await fetchStates()
  res.json(data)
}

export default states
