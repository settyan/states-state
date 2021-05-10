import React, { VFC } from "react"

import { Chart } from "@/components/Chart"
import { States } from "@/components/States"
import { StatesProvider } from "@/contexts"
import { useStates } from "@/hooks"
import { Layout } from "@/layouts/Layout"

const Index: VFC = () => {
  const [states] = useStates()

  return (
    <>
      <StatesProvider>
        <Layout>
          <States states={states} />
          <Chart />
        </Layout>
      </StatesProvider>
    </>
  )
}

export default Index
