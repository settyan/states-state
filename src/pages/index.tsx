import React, { useCallback, useEffect, useState, VFC } from "react"

import { fetchProxyPopulation } from "@/api/fetchProxyPopulation"
import { Chart } from "@/components/Chart"
import type { Data } from "@/components/Chart/Chart"
import { States } from "@/components/States"
import { useStates } from "@/hooks"

const Index: VFC = () => {
  const [states] = useStates()
  const [state, setState] = useState<number>()
  const [chartData, setChartData] = useState<Data[]>([])

  useEffect(() => {
    fetchProxyPopulation(state).then((data) => {
      const polulation = data?.result?.data.find(
        (item) => item.label === "総人口"
      )?.data

      const newChartData =
        polulation?.map((item) => ({
          x: item.year.toString(),
          y: item.value,
        })) ?? []
      setChartData(newChartData)
    })
  }, [state])

  const handleOnStateChange = useCallback(
    (state: number) => {
      setState(state)
    },
    [setState]
  )

  return (
    <>
      <States
        state={state}
        states={states}
        onStateChange={handleOnStateChange}
      />
      <Chart label={state?.toString()} data={chartData} />
    </>
  )
}

export default Index
