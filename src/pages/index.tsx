import React, { VFC } from "react"

import { States } from "@/components/States"
import { useStates } from "@/hooks"
import Layout from "@/layouts/layout"

const Index: VFC = () => {
  const [states] = useStates()

  return (
    <>
      <Layout>
        <States states={states} />
      </Layout>
    </>
  )
}

export default Index
