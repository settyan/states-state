import React, { memo, useCallback, VFC } from "react"

import { State } from "@/types"

import { Empty } from "./Empty"
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
          {!states || states.length < 1 ? (
            <Empty />
          ) : (
            <StatesSelect
              states={states}
              state={state}
              onStateChange={handleOnChange}
            />
          )}
        </div>
      </div>
    </>
  )
})

States.displayName = "States"
