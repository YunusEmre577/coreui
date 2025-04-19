import { cva } from "class-variance-authority";

const checkboxVariants = cva(
     "border border-primary disabled:cursor-not-allowed cursor-pointer hover:bg-secondary data-[state=checked]:bg-primary flex items-center justify-center appearance-none", {
          variants: {
               size: {
                    sm:"size-5 rounded",
                    md:"size-6 rounded-sm",
                    lg:"size-7 rounded-md",
               }
          },
          defaultVariants: {
               size:"md"
          }
     }
)
export {checkboxVariants}