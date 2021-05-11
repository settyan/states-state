import React, { useCallback, useEffect, useState, VFC } from "react"

import { fetchProxyPopulation } from "@/api/fetchProxyPopulation"
import { fetchStates, StatesResponse } from "@/api/fetchStates"
import { Chart } from "@/components/Chart"
import type { Data } from "@/components/Chart/Chart"
import { States } from "@/components/States"
import { GetServerSideProps } from "next"

export type IndexProps = Readonly<{
  states: StatesResponse["result"]
}>

const Index: VFC<IndexProps> = (props) => {
  const { states } = props

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const states = (await fetchStates()).result

  return {
    props: {
      states,
    },
  }
}

export default Index
