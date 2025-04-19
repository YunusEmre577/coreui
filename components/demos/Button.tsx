import React from 'react'
import { Button } from '../core-ui/Button'

const ButtonDemo = () => {
  return (
    <Button>Button</Button>
  )
}
const ButtonDemoVariants = () => {
     return (
      <div className='flex flex-wrap gap-2 items-center'>
          <Button variant="primary">primary</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="outline-primary">outline-primary</Button>
          <Button variant="ghost">ghost</Button>
      </div>
     )
   }

export {ButtonDemo, ButtonDemoVariants}