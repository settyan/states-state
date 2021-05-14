import React, { memo, VFC } from "react"

import { Segment } from "@/components/Segment"
import { Color } from "chart.js"
import { Line } from "react-chartjs-2"

import styles from "./chart.module.css"

export interface Data {
  readonly x: string | number
  readonly y: number
}

export interface DataSet {
  readonly label: string
  readonly data: Data[]
  readonly borderColor?: Color
  readonly backgroundColor?: Color
}

export interface ChartProps {
  readonly loading: boolean
  readonly dataSets?: DataSet[]
}

export const Chart: VFC<ChartProps> = memo((props) => {
  const data = {
    datasets: props.dataSets,
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
          ) : !props?.dataSets || props?.dataSets.length < 1 ? (
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
} as ChartProps
