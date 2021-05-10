// src/contexts/StatesContext.tsx
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  VFC,
} from "react"

export type States = number | null

const initialState: States = null

const StatesContext = React.createContext<States>(initialState)
const SetStatesContext = React.createContext<Dispatch<SetStateAction<States>>>(
  () => {
    return
  }
)

export const useStates = (): States => {
  return useContext(StatesContext)
}
export const useSetStates = (): Dispatch<SetStateAction<States>> => {
  return useContext(SetStatesContext)
}

type StatesProviderProps = Readonly<{
  initialState?: States
  children: React.ReactNode
}>

export const StatesProvider: VFC<StatesProviderProps> = (props) => {
  const [state, setState] = useState<States>(
    props?.initialState ?? initialState
  )
  return (
    <StatesContext.Provider value={state}>
      <SetStatesContext.Provider value={setState}>
        {props.children}
      </SetStatesContext.Provider>
    </StatesContext.Provider>
  )
}
