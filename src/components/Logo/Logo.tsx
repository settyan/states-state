import React from "react"

import Image from "next/image"

export type LogoProps = Readonly<{}>

export const Logo: React.VFC<LogoProps> = (props) => {
  const { ...LogoProps } = props

  return (
    <>
      <div {...LogoProps}>
        <Image src="/logo@2x.png" width="140" height="51" />
      </div>
    </>
  )
}
