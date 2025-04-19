import { VariantProps } from "class-variance-authority";
import React from "react";
import { buttonVariants } from "../variants/button";
import { cn } from "../libs/utils";
import * as Slot from "@radix-ui/react-slot";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<"button"> & { asChild?: boolean } & VariantProps<
      typeof buttonVariants
    >
>(({ variant, size, iconOnly, asChild = false, className, ...props }, ref) => {
  const Component = (asChild ? Slot.Slot : "button") as React.ElementType;
  return (
    <Component
      className={cn(buttonVariants({ variant, size, iconOnly, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";
export { Button };
