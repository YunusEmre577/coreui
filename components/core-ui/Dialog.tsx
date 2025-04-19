import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../libs/utils";
import { Heading } from "./Heading";

const Dialog: React.FC<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
> = ({ ...props }) => {
  return <DialogPrimitive.Root {...props} />;
};

const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Trigger>
>(({ ...props }, ref) => {
  return <DialogPrimitive.Trigger ref={ref} {...props} />;
});

const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0  data-[state=closed]:animate-out backdrop-blur-md fixed inset-0 bg-foreground/60 dark:bg-background/20 z-[49]" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 left-1/2 data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out top-1/2 -translate-x-1/2 shadow-sm -translate-y-1/2 min-w-[400px] max-w-lg lg:max-w-2xl rounded-lg bg-background border border-border",
          className
        )}
        ref={ref}
        {...props}
      >
        <DialogPrimitive.Title />
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"header">
>(({ className, ...props }, ref) => {
  return (
    <header
      className={cn("p-8 flex flex-col gap-1", className)}
      ref={ref}
      {...props}
    />
  );
});
const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"footer">
>(({ className, ...props }, ref) => {
  return (
    <footer
      className={cn(
        "p-8 pt-0 flex justify-center lg:justify-end flex-col lg:flex-row items-center gap-2",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
const DialogSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <section
      className={cn("p-8 flex flex-col gap-2", className)}
      ref={ref}
      {...props}
    />
  );
});
const DialogTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <Heading
      className={cn("text-center lg:text-left", className)}
      ref={ref}
      type={"h3"}
      {...props}
    />
  );
});
const DialogDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"section">
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn(
        "text-muted text-center lg:text-left text-[15px]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<typeof DialogPrimitive.Close>
>(({ ...props }, ref) => {
  return <DialogPrimitive.Close ref={ref} {...props} />;
});
Dialog.displayName = "Dialog";
DialogTrigger.displayName = "DialogTrigger";
DialogBody.displayName = "DialogBody";
DialogHeader.displayName = "DialogHeader";
DialogFooter.displayName = "DialogFooter";
DialogSection.displayName = "DialogSection";
DialogTitle.displayName = "DialogTitle";
DialogDescription.displayName = "DialogDescription";
DialogClose.displayName = "DialogClose";
export {
  Dialog,
  DialogTrigger,
  DialogBody,
  DialogHeader,
  DialogFooter,
  DialogSection,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
