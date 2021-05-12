import React from "react"

import { Story, Meta } from "@storybook/react"

import { Chart, ChartProps } from "./Chart"

export default {
  title: "Chart",
  component: Chart,
} as Meta

const Template: Story<ChartProps> = (args) => <Chart {...args} />

export const Default = Template.bind({})
Default.args = {}
