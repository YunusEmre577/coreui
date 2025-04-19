import React from "react";
import { cn } from "../libs/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex flex-col border border-border rounded-lg shadow-xs",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <section
      className={cn("p-4 flex flex-col", className)}
      ref={ref}
      {...props}
    />
  );
});
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"header">
>(({ className, ...props }, ref) => {
  return (
    <header
      className={cn("p-4 flex flex-col", className)}
      ref={ref}
      {...props}
    />
  );
});
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"footer">
>(({ className, ...props }, ref) => {
  return (
    <footer
      className={cn("p-4 flex flex-col", className)}
      ref={ref}
      {...props}
    />
  );
});

Card.displayName = "Card";
CardBody.displayName = "CardBody";
CardHeader.displayName = "CardHeader";
CardFooter.displayName = "CardFooter";
export { Card, CardBody, CardHeader, CardFooter };
