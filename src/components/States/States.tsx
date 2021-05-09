import React, { useState } from "react"

import { State } from "@/types"
import { RadioGroup } from "@headlessui/react"
import clsx from "clsx"

import styles from "./states.module.css"

export type StatesProps = Readonly<{
  states: State[] | undefined
}>

export const States: React.VFC<StatesProps> = (props) => {
  const { states, ...StatesProps } = props
  const [plan, setPlan] = useState<string>()

  return (
    <>
      <div className={styles.Container} {...StatesProps}>
        <div className={styles.Inner}>
          <RadioGroup
            value={plan}
            onChange={setPlan}
            className={styles.SelectContainer}>
            {states?.map((state) => (
              <RadioGroup.Option
                className={clsx(styles.Select_ItemContainer)}
                key={state.prefCode}
                value={state.prefName}>
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
        </div>
      </div>
    </>
  )
}
