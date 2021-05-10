import React, { VFC } from "react"

import { States } from "@/components/States"
import { StatesProvider } from "@/contexts"
import { useStates } from "@/hooks"
import Layout from "@/layouts/layout"

const Index: VFC = () => {
  const [states] = useStates()

  return (
    <>
      <StatesProvider>
        <Layout>
          <States states={states} />
        </Layout>
      </StatesProvider>
    </>
  )
}

export default Index
