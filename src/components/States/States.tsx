import React, { memo, useCallback, VFC } from "react"

import { Segment } from "@/components/Segment"
import { State } from "@/types"

import styles from "./states.module.css"
import { StatesSelect } from "./StatesSelect"

export type StatesProps = Readonly<{
  states?: State[]
  state?: State["prefCode"]
  onStateChange?(state: number): void
}>

export const States: VFC<StatesProps> = memo((props) => {
  const { states, state, onStateChange } = props

  const handleOnChange = useCallback(
    (value: number) => {
      onStateChange?.(value)
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
              onStateChange={handleOnChange}
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
