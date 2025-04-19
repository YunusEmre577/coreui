import React from 'react'
import { Avatar } from '../core-ui/Avatar'

const AvatarDemo = () => {
  return (
    <>
     <Avatar alt='Avatar Demo' image='https://i.pravatar.cc/300?u=a042581f4e29026705a' />
    </>
  )
}

const AvatarSizeDemo = () => {
     return (
       <div className='flex flex-wrap items-center gap-2'>
        <Avatar size="sm" alt='Avatar Demo' image='https://i.pravatar.cc/300?u=a042581f4e29026705sda' />
        <Avatar size="md" alt='Avatar Demo' image='https://i.pravatar.cc/300?u=a042581f4e29026705bda' />
        <Avatar size="lg" alt='Avatar Demo' image='broken' />
        <Avatar size="xl" alt='Avatar Demo' image='https://i.pravatar.cc/300?u=a042581f4e29026705dda' />
        <Avatar size="2xl" alt='Avatar Demo' image='https://i.pravatar.cc/300?u=a042581f4e29026705eda' />
       </div>
     )
   }
   
export {AvatarDemo, AvatarSizeDemo}