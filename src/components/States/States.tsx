import React, { memo, useCallback, VFC } from "react"

import { Segment } from "@/components/Segment"
import { State } from "@/types"

import styles from "./states.module.css"
import { StatesSelect } from "./StatesSelect"

export type StatesProps = Readonly<{
  states?: State[]
  state?: State
  onStateChange?(state: State): void
}>

export const States: VFC<StatesProps> = memo((props) => {
  const { states, state, onStateChange } = props

  const handleOnChange = useCallback(
    (state: State) => {
      onStateChange?.(state)
    },
    [onStateChange]
  )

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          {states && states.length > 0 ? (
            <StatesSelect
              states={states}
              state={state}
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
