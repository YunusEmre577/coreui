import { cva } from "class-variance-authority";

const toggleVariants = cva(
  "disabled:opacity-50 flex items-center justify-center rounded-lg cursor-pointer transition-all disabled:pointer-events-none ",
  {
    variants: {
      size: {
        sm: "size-8 rounded-md",
        md: "size-10",
        lg: "size-12",
      },
      variant: {
        outline:
          "ring-1 ring-secondary hover:bg-tertiary data-[state=on]:bg-tertiary data-[state=on]:brightness-[0.98]",
        ghost:
          "hover:bg-secondary data-[state=on]:bg-secondary data-[state=on]:brightness-[0.98]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);
export { toggleVariants };
