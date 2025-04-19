import React from "react";
import { cn } from "../libs/utils";
import { headingVariants } from "../variants/heading";

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithRef<"hgroup"> & {
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
>(({ className, type = "h1", ...props }, ref) => {
  const Component = type as React.ElementType;

  return (
    <Component
      className={cn(headingVariants({ type, className }))}
      ref={ref}
      {...props}
    />
  );
});

Heading.displayName = "Heading";
export { Heading };
