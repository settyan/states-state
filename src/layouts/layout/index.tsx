import React from "react"

import { Header } from "@/components/Header"

type Props = Readonly<{
  children: React.ReactNode
}>

const Index: React.VFC<Props> = (props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Index
