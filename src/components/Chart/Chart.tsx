import React, { VFC } from "react"

import { Line } from "react-chartjs-2"

import styles from "./chart.module.css"

export type ChartProps = Readonly<Record<string, never>>

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
    },
  ],
}

const options = {
  animation: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

export const Chart: VFC<ChartProps> = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <Line type="line" data={data} options={options} />
        </div>
      </div>
    </>
  )
}
