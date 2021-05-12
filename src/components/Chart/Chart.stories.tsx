import React from "react"

import { Story, Meta } from "@storybook/react"

import { Chart, ChartProps } from "./Chart"

export default {
  title: "Chart",
  component: Chart,
} as Meta

const Template: Story<ChartProps> = (args) => <Chart {...args} />

export const Default = Template.bind({})
Default.args = {
  dataSets: [
    {
      label: "AAA",
      data: [
        {
          x: "0",
          y: 0,
        },

        {
          x: "1",
          y: 1,
        },

        {
          x: "2",
          y: 2,
        },
      ],
    },

    {
      label: "BBB",
      data: [
        {
          x: "0",
          y: 0,
        },

        {
          x: "1",
          y: 2,
        },

        {
          x: "2",
          y: 4,
        },
      ],
    },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}

export const Empty = Template.bind({})
Empty.args = {}
