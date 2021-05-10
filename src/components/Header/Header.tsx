import React, { VFC } from "react"

import { Logo } from "@/components/Logo"

import styles from "./header.module.css"

export type HeaderProps = Readonly<Record<string, never>>

export const Header: VFC<HeaderProps> = (props) => {
  const { ...headerProps } = props

  return (
    <>
      <header className={styles.header} {...headerProps}>
        <Logo />
      </header>
    </>
  )
}
