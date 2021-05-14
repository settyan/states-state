import React from "react"

import { Story, Meta } from "@storybook/react"

import { Logo } from "./Logo"

export default {
  title: "Logo",
  component: Logo,
} as Meta

const Template: Story = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {}
