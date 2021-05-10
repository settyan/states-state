import React, { ReactNode, VFC } from "react"

import { Header } from "@/components/Header"

import styles from "./layout.module.css"

type LayoutProps = Readonly<{
  children: ReactNode
}>

export const Layout: VFC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.Header}>
            <Header />
          </div>
          <main className={styles.Content}>{children}</main>
        </div>
      </div>
    </>
  )
}
