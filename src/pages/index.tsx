import React from "react"

import { States } from "@/components/States"
import { useStates } from "@/hooks"
import Layout from "@/layouts/layout"

const Index: React.VFC = () => {
  const [states, error, loading] = useStates()

  return (
    <>
      <Layout>
        <States loading={loading} states={states} />
      </Layout>
    </>
  )
}

export default Index
