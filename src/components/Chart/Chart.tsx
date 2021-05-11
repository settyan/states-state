import React, { memo, VFC } from "react"

import { Segment } from "@/components/Segment"
import { Line } from "react-chartjs-2"

import styles from "./chart.module.css"

export type Data = Readonly<{
  x: string | number
  y: number
}>

export type ChartProps = Readonly<{
  loading: boolean
  label?: string
  data?: Data[]
}>

export const Chart: VFC<ChartProps> = memo((props) => {
  const data = {
    datasets: [
      {
        label: props.label,
        data: props.data,
        fill: true,
      },
    ],
  }

  const options = {
    animation: false,
    aspectRatio: 1.7,
  }

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          {props.loading ? (
            <Segment>読み込み中</Segment>
          ) : !props?.data || props?.data.length < 1 ? (
            <Segment>情報がありません</Segment>
          ) : (
            <Line type="line" data={data} options={options} />
          )}
        </div>
      </div>
    </>
  )
})

Chart.displayName = "Chart"

Chart.defaultProps = {
  loading: false,
}
