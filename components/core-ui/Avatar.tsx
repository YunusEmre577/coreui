import React from 'react'
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { VariantProps } from 'class-variance-authority';
import { avatarVariants } from '../variants/avatar';
import { cn } from '../libs/utils';

const Avatar = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants> & {image: string; alt:string; fallback?: string}>
(({image, alt, className, size, fallback = "co",...props}, ref) => {
     return(
          <AvatarPrimitive.Root className={cn(avatarVariants({size, className}))} ref={ref} {...props}>
               <AvatarPrimitive.Image
               className='size-full object-cover rounded-[inherit] '
               src={image as string}
               alt={alt as string}
               />
               <AvatarPrimitive.Fallback className="uppercase font-medium text-muted text-[15px]">
                    {fallback}
               </AvatarPrimitive.Fallback>
          </AvatarPrimitive.Root>
     )
})

Avatar.displayName = "Avatar"
export { Avatar }