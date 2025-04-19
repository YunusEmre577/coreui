import React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "../variants/toggle";
import { cn } from "../libs/utils";
const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      className={cn("flex items-center gap-2", className)}
      ref={ref}
      {...props}
    />
  );
});

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ size, className, variant, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(toggleVariants({ size, variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
ToggleGroup.displayName = "ToggleGroup";
ToggleGroupItem.displayName = "ToggleGroupItem";
export { ToggleGroup, ToggleGroupItem };
