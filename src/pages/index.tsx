import React, { useCallback, useEffect, useState, VFC } from "react"

import { fetchProxyPopulation } from "@/api/fetchPopulation"
import { fetchStates } from "@/api/fetchStates"
import type { DataSet } from "@/components/Chart"
import { Chart } from "@/components/Chart"
import { States } from "@/components/States"
import type { State } from "@/types"
import { GetStaticProps } from "next"
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

        const ramdomColor = Math.floor(Math.random() * 16777215).toString(16)

        const dataSet: DataSet = {
          label: item.prefName,
          data,
          borderColor: `#${ramdomColor}`,
          backgroundColor: `#${ramdomColor}`,
        }

        return dataSet
      })
    )
      .then((dataSets) => {
        setChartDataSets(dataSets)
      })
      .finally(() => {
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
        <title>STATES STATE</title>
        <link rel="canonical" href="https://states-state.vercel.app" />
        <meta
          name="description"
          content="Population trends in each prefecture are provided."
        />
        <meta property="og:url" content="https://states-state.vercel.app" />
        <meta property="og:type" content=" website" />
        <meta property="og:title" content="STATES STATE" />
        <meta
          property="og:description"
          content="Population trends in each prefecture are provided."
        />
        <meta property="og:site_name" content="STATES STATE" />
        <meta
          property="og:image"
          content="https://states-state.vercel.app/ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
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

export const getStaticProps: GetStaticProps = async () => {
  const states = (await fetchStates()).result ?? []

  return {
    props: {
      states,
    },
    revalidate: 600,
  }
}

export default Index
