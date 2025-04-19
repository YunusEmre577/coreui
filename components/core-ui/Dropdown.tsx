import React from 'react'
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { Separator } from './Separator';
import { cn } from '../libs/utils';
import { Label } from './Label';

const Dropdown = DropdownPrimitive.Root;
const DropdownTrigger = DropdownPrimitive.Trigger;
const contentClass = "overflow-auto p-1.5 bg-background flex flex-col gap-px border border-border rounded-lg shadow-xs zoom-in-95 fade-in-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2"

const DropdownSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof Separator>>(
     ({ className, ...props }, ref) => {
       return <Separator ref={ref} className={cn('my-1.5', className)} {...props} />;
     }
   );
const DropdownBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof DropdownPrimitive.Content>>(({className, ...props}, ref) => {
     return(
          <DropdownPrimitive.Portal>
               <DropdownPrimitive.Content sideOffset={5} className={cn(contentClass, className)}  ref={ref} {...props} />
          </DropdownPrimitive.Portal>
     )
})
const DropdownLabel = React.forwardRef<HTMLLabelElement, React.ComponentPropsWithRef<typeof Label>>(({className, ...props}, ref) => {
     return(
          <Label className={cn("px-3 text-sm py-1.5", className)} ref={ref} {...props} />
     )
})
const DropdownItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof DropdownPrimitive.Item>>(({className, ...props}, ref) => {
     return(
          <DropdownPrimitive.Item
          className={cn("flex outline-none rounded-md transition-all cursor-pointer items-center justify-between p-2 px-3 text-sm text-muted hover:text-foreground hover:bg-secondary", className)}
          ref={ref} {...props} />
     )
})
const DropdownSub = DropdownPrimitive.Sub;
const DropdownSubTrigger = DropdownPrimitive.SubTrigger;
const DropdownSubBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<typeof DropdownPrimitive.SubContent>>(({ className, ...props}, ref) => {
     return(
          <DropdownPrimitive.Portal>
               <DropdownPrimitive.Content side='right' sideOffset={8} className={cn(contentClass, className)} ref={ref} {...props} />
          </DropdownPrimitive.Portal>
     )
})
Dropdown.displayName = "Dropdown";
DropdownTrigger.displayName = "DropdownTrigger";
DropdownSeparator.displayName = "DropdownSeparator";
DropdownBody.displayName = "DropdownBody";
DropdownItem.displayName = "DropdownItem";
DropdownLabel.displayName = "DropdownLabel";
DropdownSub.displayName = "DropdownSub";
DropdownSubTrigger.displayName = "DropdownSubTrigger";
DropdownSubBody.displayName = "DropdownSubBody";
export { Dropdown, DropdownTrigger, DropdownSeparator, DropdownBody, DropdownItem,DropdownLabel, DropdownSub, DropdownSubTrigger, DropdownSubBody }