import { fetchPopulation, PopulationResponse } from "@/api/fetchPopulation"
import type { NextApiHandler } from "next"

const states: NextApiHandler<PopulationResponse> = async (req, res) => {
  const { stateID } = req.query

  const data = await fetchPopulation(stateID as string)
  res.json(data)
}

export default states
