import React from "react"

import styles from "./empty.module.css"

export type EmptyProps = Readonly<Record<string, never>>

export const Empty: React.VFC<EmptyProps> = () => {
  return (
    <>
      <p className={styles.Empty}>Empty</p>
    </>
  )
}
