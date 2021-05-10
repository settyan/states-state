import React, { VFC } from "react"

import styles from "./empty.module.css"

export type EmptyProps = Readonly<Record<string, never>>

export const Empty: VFC<EmptyProps> = () => {
  return (
    <>
      <p className={styles.Empty}>データなし</p>
    </>
  )
}
