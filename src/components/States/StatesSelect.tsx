import React, { memo, VFC } from "react"

import { State } from "@/types"
import { RadioGroup } from "@headlessui/react"
import clsx from "clsx"

import styles from "./states-select.module.css"

export type StatesSelectItemProps = Readonly<{
  state: State
}>

export const StatesSelectItem: VFC<StatesSelectItemProps> = memo((props) => {
  const { state } = props

  return (
    <RadioGroup.Option
      className={clsx(styles.Select_ItemContainer)}
      key={state.prefCode}
      value={state}>
      {({ checked }) => (
        <RadioGroup.Label
          as="span"
          className={clsx(
            styles.Select_Item,
            checked && styles.Select_ItemChecked
          )}>
          {state.prefName}
        </RadioGroup.Label>
      )}
    </RadioGroup.Option>
  )
})

StatesSelectItem.displayName = "StatesSelectItem"

export type StatesSelectProps = Readonly<{
  states: State[]
  state?: State
  onChange?(state: State): void
}>

export const StatesSelect: VFC<StatesSelectProps> = (props) => {
  const { states, state, onChange } = props

  const handleOnChange = (value: State) => {
    onChange?.(value)
  }

  return (
    <>
      <RadioGroup
        value={state}
        onChange={handleOnChange}
        className={styles.SelectContainer}>
        {states.map((state, index) => (
          <StatesSelectItem key={index} state={state} />
        ))}
      </RadioGroup>
    </>
  )
}
