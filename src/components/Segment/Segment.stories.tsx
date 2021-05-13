import React from "react"

import { Story, Meta } from "@storybook/react"

import { Segment, SegmentProps } from "./Segment"

export default {
  title: "Segment",
  component: Segment,
} as Meta

const Template: Story<SegmentProps> = (args) => (
  <Segment {...args}>ここにテキストが入ります</Segment>
)

export const Default = Template.bind({})
Default.args = {}
