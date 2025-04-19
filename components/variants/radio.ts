import { cva } from "class-variance-authority";

const radioVariants = cva("border rounded-full hover:bg-secondary flex justify-center items-center border-primary", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
export { radioVariants };
