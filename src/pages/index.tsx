import React, { useCallback, useState, VFC } from "react"

import { Chart } from "@/components/Chart"
import { States } from "@/components/States"
import { useStates } from "@/hooks"

const Index: VFC = () => {
  const [states] = useStates()
  const [state, setState] = useState<number>()

  const handleOnStateChange = useCallback((state: number) => {
    setState(state)
  }, [])

  return (
    <>
      <States
        state={state}
        states={states}
        onStateChange={handleOnStateChange}
      />
      <Chart />
    </>
  )
}

export default Index
