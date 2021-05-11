import { createElement, ReactNode, VFC } from "react"

import styles from "./segment.module.css"

export type SegmentProps = Readonly<
  JSX.IntrinsicElements["p"] & {
    as?: string
    children: ReactNode
  }
>

export const Segment: VFC<SegmentProps> = (props) => {
  const { as, children, ...otherProps } = props

  return createElement(
    as as string,
    {
      className: styles.Container,
      ...otherProps,
    },
    children
  )
}

Segment.defaultProps = {
  as: "p",
}
