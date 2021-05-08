import React from "react"

type Props = {
  children: React.ReactNode
}

const Index: React.VFC<Props> = (props) => {
  return (
    <>
      <div className="wrapper">
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Index
