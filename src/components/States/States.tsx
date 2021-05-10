import React, { VFC } from "react"

import { useStates, useSetStates } from "@/contexts"
import { State } from "@/types"
import { RadioGroup } from "@headlessui/react"
import clsx from "clsx"

import { Empty } from "./Empty"
import styles from "./states.module.css"

export type StatesProps = Readonly<{
  states: State[] | undefined
}>

export const States: VFC<StatesProps> = (props) => {
  const { states, ...StatesProps } = props
  const state = useStates()
  const setState = useSetStates()

  return (
    <>
      <div className={styles.Container} {...StatesProps}>
        <div className={styles.Inner}>
          {!states || states.length < 1 ? (
            <Empty />
          ) : (
            <RadioGroup
              value={state}
              onChange={setState}
              className={styles.SelectContainer}>
              {states?.map((state) => (
                <RadioGroup.Option
                  className={clsx(styles.Select_ItemContainer)}
                  key={state.prefCode}
                  value={state.prefCode}>
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
              ))}
            </RadioGroup>
          )}
        </div>
      </div>
    </>
  )
}
