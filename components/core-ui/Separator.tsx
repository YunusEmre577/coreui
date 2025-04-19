import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../libs/utils";
const Separator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof SeparatorPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        "bg-border data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Separator.displayName = "Separator";
export { Separator };
