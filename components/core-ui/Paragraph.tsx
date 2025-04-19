import React from 'react'
import { cn } from '../libs/utils'

const Paragraph = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithRef<"p">>(({className, ...props}, ref) => {
     return(
          <p ref={ref} className={cn("text-[15px] text-muted", className)} {...props} />
     )
})
Paragraph.displayName = "Paragraph"
export { Paragraph }