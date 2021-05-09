import React from "react"

import { Logo } from "@/components/Logo"

import styles from "./header.module.css"

export type HeaderProps = Readonly<{}>

export const Header: React.VFC<HeaderProps> = (props) => {
  const { ...headerProps } = props

  return (
    <>
      <header className={styles.header} {...headerProps}>
        <Logo />
      </header>
    </>
  )
}
