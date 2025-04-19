import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "cursor-pointer transition-all inline-flex whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none items-center justify-center gap-2 active:brightness-[0.98] font-medium rounded-lg",
  {
    variants: {
      iconOnly: {
        true: "!px-0",
        false: "",
      },
      size: {
        sm: "h-9 min-w-9 px-3 text-sm",
        md: "h-10 min-w-10 px-4 text-[15px]",
        lg: "h-11 min-w-11 px-4 text-[15px]",
      },
      variant: {
        primary:
          "bg-primary hover:opacity-[0.90] active:opacity-[0.85] text-background",
        "outline-primary":
          "ring-1 active:opacity-[0.90] ring-primary hover:bg-primary hover:text-background text-primary",
        outline: "ring-1 ring-secondary hover:bg-tertiary",
        secondary:
          "bg-secondary hover:brightness-[0.98] active:brightness-[0.96]",
        ghost: "text-primary hover:bg-secondary",
      },
    },
    defaultVariants: {
      iconOnly: false,
      size: "md",
      variant: "primary",
    },
  }
);
export { buttonVariants };
