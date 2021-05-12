import React from "react"

import { render, screen } from "@testing-library/react"

import { Chart } from "./"

describe("Chart", () => {
  it("Check state", () => {
    const { rerender } = render(<Chart loading={true} />)
    expect(screen.getByText("読み込み中")).toBeInTheDocument()

    rerender(<Chart loading={false} />)
    expect(screen.getByText("情報がありません")).toBeInTheDocument()
  })
})
