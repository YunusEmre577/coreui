import React from 'react'
import { useMDXComponent } from "next-contentlayer2/hooks"
import { MDXProvider } from "@mdx-js/react"
export function MDXContent({code}: {code:string}) {
  const Component = useMDXComponent(code)
  return(
    <MDXProvider>
      <Component />
    </MDXProvider>
  )
}