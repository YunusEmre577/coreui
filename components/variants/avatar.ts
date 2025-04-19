import { cva } from "class-variance-authority";

const avatarVariants = cva(
     "inline-flex select-none bg-secondary tocuh-none items-center justify-center rounded-full", {
          variants: {
               size: {
                    sm:"size-8",
                    md:"size-10",
                    lg:"size-12",
                    xl:"size-14",
                    "2xl":"size-16",
               }
          },
          defaultVariants: {
               size:"md"
          }
     }
)

export { avatarVariants}