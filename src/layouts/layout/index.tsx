import React, { ReactNode, VFC } from "react"

import { Header } from "@/components/Header"

type Props = Readonly<{
  children: ReactNode
}>

const Index: VFC<Props> = (props) => {
  const { children } = props

  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Index
