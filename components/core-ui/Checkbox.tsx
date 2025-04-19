import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { VariantProps } from "class-variance-authority";
import { checkboxVariants } from "../variants/checkbox";
import { cn } from "../libs/utils";

const Checkbox = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
    className={cn(checkboxVariants({size, className}))}
    ref={ref} {...props}>
      <CheckboxPrimitive.Indicator className="text-background">
        <CheckIcon width={17} height={17} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";
export { Checkbox };
