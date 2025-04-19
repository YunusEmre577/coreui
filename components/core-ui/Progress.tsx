import React from 'react'
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from '../libs/utils'
const Progress = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof ProgressPrimitive.Root>>(({className, value, ...props}, ref) => {
     return(
          <ProgressPrimitive.Root className={cn("relative h-2 w-full overflow-hidden rounded-full bg-border", className)} ref={ref} {...props}>
               <ProgressPrimitive.Indicator className='transition-all w-full h-full bg-primary' style={{transform: `translateX(-${100 - (value || 0)}%)`}} />
          </ProgressPrimitive.Root>
     )
})
Progress.displayName = "Progress"
export { Progress }