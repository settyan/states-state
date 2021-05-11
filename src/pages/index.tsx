import React, { useCallback, useEffect, useState, VFC } from "react"

import { fetchProxyPopulation } from "@/api/fetchPopulation"
import { fetchStates } from "@/api/fetchStates"
import type { DataSet } from "@/components/Chart"
import { Chart } from "@/components/Chart"
import { States } from "@/components/States"
import type { State } from "@/types"
import { GetServerSideProps } from "next"
import Head from "next/head"

export type IndexProps = Readonly<{
  states: State[]
}>

const Index: VFC<IndexProps> = (props) => {
  const { states } = props

  const [state, setState] = useState<State[]>([])
  const [chartDataSets, setChartDataSets] = useState<DataSet[]>([])
  const [loadingChartData, setLoadingChartData] = useState<boolean>(false)

  useEffect(() => {
    setLoadingChartData(true)
    setChartDataSets([])

    Promise.all(
      state.map(async (item) => {
        const res = await fetchProxyPopulation(item.prefCode)
        const polulation = res?.result?.data.find(
          (item) => item.label === "総人口"
        )?.data

        const data =
          polulation?.map((item) => ({
            x: item.year.toString(),
            y: item.value,
          })) ?? []

        const DataSets: DataSet = {
          label: item.prefName,
          data,
        }

        setChartDataSets((currentDataSets) => [...currentDataSets, DataSets])
      })
    ).finally(() => {
      setLoadingChartData(false)
    })
  }, [state])

  const handleOnStateChange = useCallback(
    (state: State[]) => {
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
        value={state}
        states={states}
        onStateChange={handleOnStateChange}
      />

      <Chart loading={loadingChartData} dataSets={chartDataSets} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const states = (await fetchStates()).result ?? []

  return {
    props: {
      states,
    },
  }
}

export default Index
