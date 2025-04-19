import React from 'react'
import * as CollPrimitive from "@radix-ui/react-collapsible"
const Collapsible = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof CollPrimitive.Root>>(({...props}, ref) => {
     return(
          <CollPrimitive.Root ref={ref} {...props} />
     )
})
const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<typeof CollPrimitive.Trigger>>(({...props}, ref) => {
     return(
          <CollPrimitive.Trigger ref={ref} {...props} />
     )
})
const CollapsibleContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof CollPrimitive.Content>>(({...props}, ref) => {
     return(
          <CollPrimitive.Content ref={ref} {...props} />
     )
})
Collapsible.displayName= "Collapsible"
CollapsibleTrigger.displayName= "CollapsibleTrigger"
CollapsibleContent.displayName= "CollapsibleContent"
export { Collapsible, CollapsibleTrigger, CollapsibleContent }