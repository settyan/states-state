import React, { VFC } from "react"

import { CheckBox } from "@/components/Checkbox"
import { State } from "@/types"

export type StatesSelectItemProps = Readonly<{
  state: State
}>

export type StatesSelectProps = Readonly<{
  states: State[]
  value: State[]
  onChange?(state: State[]): void
}>

export const StatesSelect: VFC<StatesSelectProps> = (props) => {
  const { states, value, onChange } = props

  const handleOnChange = (newValue: (string | number)[]) => {
    const newStates = states.filter(
      (state) => newValue.indexOf(state.prefCode) !== -1
    )
    onChange?.(newStates)
  }

  return (
    <>
      <CheckBox
        value={value.map((state) => state.prefCode)}
        onChange={handleOnChange}
        align="center">
        {states.map((state) => (
          <CheckBox.Item value={state.prefCode} key={state.prefCode}>
            {state.prefName}
          </CheckBox.Item>
        ))}
      </CheckBox>
    </>
  )
}
