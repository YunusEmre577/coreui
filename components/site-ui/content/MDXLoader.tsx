import React from 'react'
import { useMDXComponent } from "next-contentlayer2/hooks"
export function MDXContent({code}: {code:string}) {
  const Component = useMDXComponent(code)
  return(
    <div>
      <Component />
    </div>
  )
}