import React from "react"

import styles from "./loading.module.css"

export type LoadingProps = Readonly<Record<string, never>>

export const Loading: React.VFC<LoadingProps> = () => {
  return (
    <>
      <p className={styles.Loading}>Loading</p>
    </>
  )
}
