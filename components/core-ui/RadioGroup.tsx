import React from "react";
import * as Radio from "@radix-ui/react-radio-group";
import { cn } from "../libs/utils";
import { VariantProps } from "class-variance-authority";
import { radioVariants } from "../variants/radio";

const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof Radio.Root>
>(({ className, ...props }, ref) => {
  return (
    <Radio.Root
      className={cn("flex flex-col gap-2", className)}
      ref={ref}
      {...props}
    />
  );
});

const RadioGroupItem = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<typeof Radio.Item> & VariantProps<typeof radioVariants>>(
({size, className, ...props}, ref) => {
     return(
          <Radio.Item
          className={cn(radioVariants({size, className}))}
          ref={ref} {...props}
          >
               <Radio.Indicator className={cn("relative flex size-full items-center justify-center after:content-[''] after:size-3 after:block after:rounded-full after:bg-primary", {
                    "after:size-2.5": size == "sm",
                    "after:size-4": size == "lg",
               })} />
          </Radio.Item>
     )
})

RadioGroup.displayName = "RadioGroup";
RadioGroupItem.displayName = "RadioGroupItem";
export { RadioGroup, RadioGroupItem };
