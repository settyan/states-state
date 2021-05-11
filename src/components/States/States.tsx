import React, { memo, VFC } from "react"

import { Segment } from "@/components/Segment"
import { State } from "@/types"

import styles from "./states.module.css"
import { StatesSelect } from "./StatesSelect"

export type StatesProps = Readonly<{
  states: State[]
  value: State[]
  onStateChange?(state: State[]): void
}>

export const States: VFC<StatesProps> = memo((props) => {
  const { states, value, onStateChange } = props

  const handleOnChange = (state: State[]) => {
    onStateChange?.(state)
  }

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          {states && states.length > 0 ? (
            <StatesSelect
              value={value}
              states={states}
              onChange={handleOnChange}
            />
          ) : (
            <Segment>選択可能な県はありません</Segment>
          )}
        </div>
      </div>
    </>
  )
})

States.displayName = "States"
