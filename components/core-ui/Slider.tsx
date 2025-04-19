import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../libs/utils";

const Slider = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof SliderPrimitive.Root>
>(({ className, value, min, max, defaultValue, ...props }, ref) => {
  const val = React.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [value, defaultValue, min, max]);


  return (
    <SliderPrimitive.Root
      className={cn(
        "relative flex h-5 w-full touch-none select-none items-center",
        className
      )}
      value={value}
      min={min}
      max={max}
      defaultValue={defaultValue}
      ref={ref}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 grow overflow-hidden rounded-full bg-border">
        <SliderPrimitive.Range className="h-full absolute bg-primary" />
      </SliderPrimitive.Track>
      {val.map((_, i) => (
        <SliderPrimitive.Thumb key={i} className="block size-4 focus:ring-3 transition-all rounded-full bg-white ring-1 ring-primary" />
      ))}
    </SliderPrimitive.Root>
  );
});

Slider.displayName = "Slider";
export { Slider };
