import React, { VFC } from "react"

import Image from "next/image"

export const Logo: VFC = (props) => {
  const { ...LogoProps } = props

  return (
    <>
      <div {...LogoProps}>
        <Image src="/logo@2x.png" width="140" height="51" alt="STATES STATE" />
      </div>
    </>
  )
}
