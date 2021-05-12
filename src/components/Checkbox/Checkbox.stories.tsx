import React from "react"

import { Story, Meta } from "@storybook/react"

import { CheckBox, CheckboxProps } from "./Checkbox"

export default {
  title: "Checkbox",
  component: CheckBox,
} as Meta

const Template: Story<CheckboxProps> = (args) => (
  <CheckBox {...args}>
    <CheckBox.Item value="A">A</CheckBox.Item>
    <CheckBox.Item value="B">B</CheckBox.Item>
    <CheckBox.Item value="C">C</CheckBox.Item>
  </CheckBox>
)

export const Default = Template.bind({})
Default.args = {
  value: [],
}

export const Selected = Template.bind({})
Selected.args = {
  value: ["A"],
}
