import React, { memo, VFC } from "react"

import { Line } from "react-chartjs-2"

import styles from "./chart.module.css"
import { Empty } from "./Empty"

export type Data = Readonly<{
  x: string | number
  y: number
}>

export type ChartProps = Readonly<{
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
  }

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          {!props?.data || props?.data.length < 1 ? (
            <Empty />
          ) : (
            <Line type="line" data={data} options={options} />
          )}
        </div>
      </div>
    </>
  )
})

Chart.displayName = "Chart"
