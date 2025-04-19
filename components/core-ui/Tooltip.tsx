import React from 'react'
import * as Tool from "@radix-ui/react-tooltip"
import { cn } from '../libs/utils'
const Tooltip: React.FC<React.ComponentPropsWithoutRef<typeof Tool.Root>> = ({...props}) => {
     return(
          <Tool.Provider delayDuration={50}>
               <Tool.Root {...props} />
          </Tool.Provider>
     )
}
const TooltipTrigger = Tool.Trigger
const TooltipContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Tool.Content>>(({className, children, ...props}, ref) => {
     return(
          <Tool.Portal>
               <Tool.Content
               sideOffset={5}
          className={cn("border border-border p-1.5 px-3 rounded-lg shadow-xs", "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=delayed-open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=delayed-open]:fade-in-0 data-[state=instant-open]:animate-in data-[state=instant-open]:fade-in-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[state=instant-open]:zoom-in-95 data-[state=closed]:fade-out-0", className)}
          ref={ref} {...props}>
               {children}
               <Tool.Arrow className="fill-border" />
          </Tool.Content>
          </Tool.Portal>
     )
})

Tooltip.displayName = "Tooltip"
TooltipTrigger.displayName = "TooltipTrigger"
TooltipContent.displayName = "TooltipContent"
export { Tooltip, TooltipTrigger, TooltipContent }