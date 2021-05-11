import React, { useCallback, useEffect, useState, VFC } from "react"

import { fetchProxyPopulation } from "@/api/fetchPopulation"
import { fetchStates, StatesResponse } from "@/api/fetchStates"
import { Chart } from "@/components/Chart"
import type { Data } from "@/components/Chart/Chart"
import { States } from "@/components/States"
import type { State } from "@/types"
import { GetServerSideProps } from "next"
import Head from "next/head"

export type IndexProps = Readonly<{
  states: StatesResponse["result"]
}>

const Index: VFC<IndexProps> = (props) => {
  const { states } = props

  const [state, setState] = useState<State>()
  const [chartData, setChartData] = useState<Data[]>([])
  const [loadingChartData, setLoadingChartData] = useState<boolean>(false)

  useEffect(() => {
    if (!state) return

    setLoadingChartData(true)
    fetchProxyPopulation(state.prefCode).then((data) => {
      const polulation = data?.result?.data.find(
        (item) => item.label === "総人口"
      )?.data

      const newChartData =
        polulation?.map((item) => ({
          x: item.year.toString(),
          y: item.value,
        })) ?? []
      setChartData(newChartData)

      setLoadingChartData(false)
    })
  }, [state])

  const handleOnStateChange = useCallback(
    (state: State) => {
      setState(state)
    },
    [setState]
  )

  return (
    <>
      <Head>
        <title>States State</title>
      </Head>

      <States
        state={state}
        states={states}
        onStateChange={handleOnStateChange}
      />

      <Chart
        loading={loadingChartData}
        label={state?.prefName}
        data={chartData}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const states = (await fetchStates()).result

  return {
    props: {
      states,
    },
  }
}

export default Index
