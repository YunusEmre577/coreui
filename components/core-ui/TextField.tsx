"use client";
import React from "react";
import { Label } from "./Label";
import { textFieldVariants } from "../variants/text-field";
import { cn } from "../libs/utils";

interface TextFieldProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  left?: string;
  right?: string;
}
const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, description, size, left, right, className, ...props }, ref) => {
    const [leftWidth, setLeftWidth] = React.useState<number>(0);
    const [rightWidth, setRightWidth] = React.useState<number>(0);
    const leftRef = React.useRef<HTMLSpanElement>(null);
    const rightRef = React.useRef<HTMLSpanElement>(null);
    React.useEffect(() => {
      if (leftRef.current) {
        setLeftWidth(leftRef.current.offsetWidth);
      }
      if (rightRef.current) {
        setRightWidth(rightRef.current.offsetWidth);
      }
    }, [left, right]);
    return (
      <label className="relative flex flex-col gap-1">
        {label && <Label>{label}</Label>}
        {left && (
          <span
            ref={leftRef}
            className="absolute text-muted top-1/2 text-[15px] -translate-y-1/2 left-3"
          >
            {left}
          </span>
        )}
        {right && (
          <span
            ref={rightRef}
            className="absolute text-muted top-1/2 text-[15px] -translate-y-1/2 right-3"
          >
            {right}
          </span>
        )}
        <input
          style={{
            paddingLeft: `calc(${leftWidth + 16}px)`,
            paddingRight: `calc(${rightWidth + 16}px)`,
          }}
          className={cn(textFieldVariants({ size, className }))}
          type="text"
          ref={ref}
          {...props}
        />
        {description && (
          <span className="text-sm text-muted">{description}</span>
        )}
      </label>
    );
  }
);

TextField.displayName = "TextField";
export { TextField };
