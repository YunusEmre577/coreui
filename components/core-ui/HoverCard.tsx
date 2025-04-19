import React from "react";
import * as HoverPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../libs/utils";
const HoverCard = HoverPrimitive.Root;
const HoverCardTrigger = HoverPrimitive.Trigger;
const HoverCardBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof HoverPrimitive.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <HoverPrimitive.Portal>
      <HoverPrimitive.Content
        sideOffset={5}
        className={cn(
          "border rounded-lg border-border shadow-xs flex flex-col gap-5",
          "fade-in-0 zoom-in-95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <HoverPrimitive.Arrow className="fill-border" />
      </HoverPrimitive.Content>
    </HoverPrimitive.Portal>
  );
});

HoverCard.displayName = "HoverCard";
HoverCardTrigger.displayName = "HoverCard";
HoverCardBody.displayName = "HoverCard";
export { HoverCard, HoverCardTrigger, HoverCardBody };
