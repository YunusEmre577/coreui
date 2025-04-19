import React from 'react'
import { Switch } from '../core-ui/Switch'

const SwitchDemo = () => {
  return (
    <Switch checked />
  )
}
const SwitchSizeDemo = () => {
     return (
      <div className='flex flex-col gap-2 items-start'>
           <Switch size={"sm"} />
           <Switch size={"md"} />
           <Switch size={"lg"} />
      </div>
     )
   }
export { SwitchDemo, SwitchSizeDemo }