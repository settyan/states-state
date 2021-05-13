import React from "react"

import { render, screen } from "@testing-library/react"

import { CheckBox } from "."

describe("Checkbox", () => {
  it("Check selected item", () => {
    const { rerender } = render(
      <CheckBox value={[]}>
        <CheckBox.Item value="A">A</CheckBox.Item>
        <CheckBox.Item value="B">B</CheckBox.Item>
        <CheckBox.Item value="C">C</CheckBox.Item>
      </CheckBox>
    )

    expect(
      screen
        .queryAllByRole("checkbox")
        .filter((item) => item.getAttribute("aria-checked") === "true")
        .map((item) => item.getAttribute("data-value"))
    ).toMatchObject([])

    rerender(
      <CheckBox value={["A"]}>
        <CheckBox.Item value="A">A</CheckBox.Item>
        <CheckBox.Item value="B">B</CheckBox.Item>
        <CheckBox.Item value="C">C</CheckBox.Item>
      </CheckBox>
    )

    expect(
      screen
        .queryAllByRole("checkbox")
        .filter((item) => item.getAttribute("aria-checked") === "true")
        .map((item) => item.getAttribute("data-value"))
    ).toMatchObject(["A"])

    rerender(
      <CheckBox value={["B", "C"]}>
        <CheckBox.Item value="A">A</CheckBox.Item>
        <CheckBox.Item value="B">B</CheckBox.Item>
        <CheckBox.Item value="C">C</CheckBox.Item>
      </CheckBox>
    )

    expect(
      screen
        .queryAllByRole("checkbox")
        .filter((item) => item.getAttribute("aria-checked") === "true")
        .map((item) => item.getAttribute("data-value"))
    ).toMatchObject(["B", "C"])
  })
})
