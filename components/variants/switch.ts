import { cva } from "class-variance-authority";

const switchVariants = cva(
  "bg-border rounded-full cursor-pointer disabled:cursor-not-allowed data-[state=checked]:bg-primary dark:data-[state=checked]:bg-muted/75 transition-all p relative",
  {
    variants: {
      size: {
        sm: "h-5 w-8",
        md: "h-6 w-10",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const switchThumbVariants = cva(
  "block rounded-full translate-x-0.5 transition-all shadow bg-background dark:bg-foreground dark:data-[state=checked]:bg-foreground",
  {
    variants: {
      size: {
        sm: "size-3.5 data-[state=checked]:translate-x-4",
        md: "size-4.5 data-[state=checked]:translate-x-5",
        lg: "size-5.5 data-[state=checked]:translate-x-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
export { switchThumbVariants, switchVariants };
