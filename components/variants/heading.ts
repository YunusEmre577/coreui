import { cva } from "class-variance-authority";

const headingVariants = cva("font-bold text-foreground", {
  variants: {
    type: {
      h1: "text-2xl lg:text-3xl",
      h2: "text-xl lg:text-2xl",
      h3: "text-lg lg:text-xl font-semibold",
      h4: "text-base lg:text-lg font-semibold",
      h5: "text-sm lg:text-base font-semibold",
      h6: "text-xs lg:text-sm font-semibold",
    },
  },
  defaultVariants: {
    type: "h1",
  },
});

export { headingVariants };
