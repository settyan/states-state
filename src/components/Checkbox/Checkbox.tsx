import React, { createContext, ReactNode, useContext, VFC } from "react"

import clsx from "clsx"

import styles from "./checkbox.module.css"

export interface CheckBoxContextParams {
  readonly value: (string | number)[]
  readonly onChange?: (value: (string | number)[]) => void
}

const CheckboxContext = createContext<CheckBoxContextParams>({
  value: [],
})

export interface CheckboxItemProps {
  readonly value: string | number
  readonly children: ReactNode
}

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
      className={clsx(styles.Item, checked && styles.ItemChecked)}
      role="checkbox"
      aria-checked={checked}
      data-value={props.value}>
      {children}
    </button>
  )
}

type Align = "left" | "center" | "right"

const mapAligmContainerClass: { [P in Align]: string } = {
  left: "Container__Align_Left",
  center: "Container__Align_Center",
  right: "Container__Align_Right",
}

export interface CheckboxProps {
  readonly value: (string | number)[]
  readonly onChange?: (newValue: (string | number)[]) => void
  readonly align: Align
  readonly children: ReactNode
}

export const CheckBox = (props: CheckboxProps): JSX.Element => {
  const { value, align, onChange, children } = props

  return (
    <CheckboxContext.Provider value={{ value, onChange }}>
      <div
        className={clsx(
          styles.Container,
          styles[mapAligmContainerClass[align]]
        )}>
        {children}
      </div>
    </CheckboxContext.Provider>
  )
}

CheckBox.Item = CheckboxItem
CheckBox.defaultProps = {
  align: "left",
} as CheckboxProps
