import React from "react"

import { shallow } from "enzyme"

import { Empty } from "./Empty"
import { States } from "./States"
import styles from "./states.module.css"

describe("States", () => {
  it("Show status", () => {
    const wrapper = shallow(<States states={[]} />)
    expect(wrapper.contains(<Empty />)).toBe(true)
    wrapper.setProps({
      states: [
        {
          prefCode: 1,
          prefName: "北海道",
        },
      ],
    })
    expect(wrapper.exists(`.${styles.SelectContainer}`)).toBe(true)
  })
})
