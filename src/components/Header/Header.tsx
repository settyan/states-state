import React, { memo, VFC } from "react"

import { Logo } from "@/components/Logo"

import styles from "./header.module.css"

export const Header: VFC = memo((props) => {
  const { ...headerProps } = props

  return (
    <>
      <header className={styles.header} {...headerProps}>
        <Logo />
      </header>
    </>
  )
})

Header.displayName = "Header"
