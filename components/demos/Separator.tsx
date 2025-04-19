import React from 'react'
import { Separator } from '../core-ui/Separator'

const SeparatorDemo = () => {
  return (
    <section className='flex flex-col gap-3'>
     <header className='flex flex-col'>
          <span className='text-[15px] text-foreground font-medium'>Radix Primitives</span>
          <span className='text-sm text-muted'>An open-source UI component library.</span>
     </header>
     <Separator orientation='horizontal' />
     <footer className='h-5 flex items-center gap-3' >
          <span className='text-sm font-medium text-muted'>Blog</span>
     <Separator orientation='vertical' />
          <span className='text-sm font-medium text-muted'>Docs</span>
     <Separator orientation='vertical' />
          <span className='text-sm font-medium text-muted'>Source</span>
     </footer>
    </section>
  )
}

export {SeparatorDemo}