import React from "react"

import { shallow } from "enzyme"

import { Empty } from "./Empty"
import { Loading } from "./Loading"
import { States } from "./States"

describe("States", () => {
  it("Show status", () => {
    const wrapper = shallow(<States loading states={[]} />)
    expect(wrapper.contains(<Loading />)).toBe(true)
    wrapper.setProps({ loading: false })
    expect(wrapper.contains(<Empty />)).toBe(true)
  })
})
