import { cva } from "class-variance-authority";

const textFieldVariants = cva("ring ring-border rounded-lg outline-none focus:ring-2 focus:ring-primary font-medium placeholder:text-muted/60 transition-all", {
     variants: {
          size: {
               sm:"p-1.5 px-2.5 text-sm",
               md:"p-2 px-3 text-[15px]",
               lg:"p-2.5 px-3.5"
          }
     },
     defaultVariants: {
          size: "md"
     }
})
export { textFieldVariants }