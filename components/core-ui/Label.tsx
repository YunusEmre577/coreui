import React from 'react'
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from '../libs/utils'
const Label = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithRef<typeof LabelPrimitive.Root>>
(({className, ...props}, ref) => {
     return(
          <LabelPrimitive.Root
          className={cn("text-[15px] font-medium text-foreground", className)}
          ref={ref} {...props}
          />
     )
})
Label.displayName = "Label"
export { Label }