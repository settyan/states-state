import { createElement, ReactNode } from "react"

import clsx from "clsx"

import styles from "./segment.module.css"

type Align = "left" | "center" | "right"

const mapAligmContainerClass: { [P in Align]: string } = {
  left: "Container__Align_Left",
  center: "Container__Align_Center",
  right: "Container__Align_Right",
}

export type SegmentProps = Readonly<
  JSX.IntrinsicElements["p"] & {
    as: string
    align: Align
    children: ReactNode
  }
>

export const Segment = (props: SegmentProps): JSX.Element => {
  const { as, align, children, ...otherProps } = props

  return createElement(
    as as string,
    {
      className: clsx(styles.Container, styles[mapAligmContainerClass[align]]),
      ...otherProps,
    },
    children
  )
}

Segment.defaultProps = {
  as: "p",
  align: "center",
} as SegmentProps
