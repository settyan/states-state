import React, { createContext, ReactNode, useContext, VFC } from "react"

import clsx from "clsx"

import styles from "./checkbox.module.css"

export type CheckBoxContextParams = Readonly<{
  value: (string | number)[]
  onChange?(value: (string | number)[]): void
}>

const CheckboxContext = createContext<CheckBoxContextParams>({
  value: [],
})

export type CheckboxItemProps = Readonly<{
  value: string | number
  children: ReactNode
}>

export const CheckboxItem: VFC<CheckboxItemProps> = (props) => {
  const { children } = props
  const { value, onChange } = useContext(CheckboxContext)

  const checked = value?.indexOf(props.value) !== -1

  const handleOnClick = () => {
    const newValue = checked
      ? value?.filter((item) => item !== props.value)
      : [...value, props.value]

    onChange?.(newValue)
  }

  return (
    <button
      onClick={handleOnClick}
      className={clsx(styles.Item, checked && styles.ItemChecked)}>
      {children}
    </button>
  )
}

export type CheckboxProps = Readonly<{
  value: (string | number)[]
  onChange?(newValue: (string | number)[]): void
  children: ReactNode
}>

export const CheckBox = (props: CheckboxProps): JSX.Element => {
  const { value, onChange, children } = props

  return (
    <CheckboxContext.Provider value={{ value, onChange }}>
      {children}
    </CheckboxContext.Provider>
  )
}

CheckBox.Item = CheckboxItem
