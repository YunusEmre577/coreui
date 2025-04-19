import React from 'react'
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from '../libs/utils'
import { Heading } from './Heading'
const Popover: React.FC<React.ComponentPropsWithRef<typeof PopoverPrimitive.Root>> =  ({...props}) => {
     return(
          <PopoverPrimitive.Root {...props} />
     )
}
const PopoverTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>>(({...props}, ref) => {
     return(
          <PopoverPrimitive.Trigger ref={ref} {...props} />
     )
})
const PopoverBody = React.forwardRef<HTMLDivElement,React.ComponentPropsWithRef<typeof PopoverPrimitive.Content>>(({className, ...props}, ref) => {
return(
<PopoverPrimitive.Portal>
     <PopoverPrimitive.Content sideOffset={6} className={cn("min-w-80 rounded-lg bg-background border border-border shadow-xs", "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-right-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95", className)} ref={ref} {...props} />
</PopoverPrimitive.Portal>
)
})
const PopoverHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"header">>
(({className,...props}, ref) => {
     return(
          <header className={cn("p-4 flex flex-col", className)} ref={ref} {...props} />
     )
})
const PopoverTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithRef<"h5">>
(({className,...props}, ref) => {
     return(
          <Heading type='h5' className={className} ref={ref} {...props} />
     )
})
const PopoverContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<"section">>
(({className,...props}, ref) => {
     return(
          <section className={cn("p-4 flex flex-col", className)} ref={ref} {...props} />
     )
})
Popover.displayName= "Popver"
PopoverTrigger.displayName= "PopverTrigger"
PopoverBody.displayName= "PopoverBody"
PopoverHeader.displayName= "PopoverHeader"
PopoverTitle.displayName= "PopoverTitle"
PopoverContent.displayName= "PopoverContent"
export { Popover, PopoverTrigger, PopoverBody, PopoverHeader, PopoverContent, PopoverTitle }