import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../libs/utils";
import { VariantProps } from "class-variance-authority";
import { switchVariants, switchThumbVariants } from "../variants/switch";

const Switch = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof SwitchPrimitive.Root> &
    VariantProps<typeof switchVariants>
>(({ size, className, ...props }, ref) => {
  return (
    <SwitchPrimitive.Root
      className={cn(switchVariants({ size, className }))}
      ref={ref}
      {...props}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = "Switch";
export { Switch };
