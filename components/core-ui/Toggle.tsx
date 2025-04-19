import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "../libs/utils";
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "../variants/toggle";

const Toggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<"button"> & VariantProps<typeof toggleVariants>
>(({ size, variant, className, ...props }, ref) => {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ size, variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

Toggle.displayName = "Toggle";
export { Toggle };
