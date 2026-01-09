import { cn } from "../../utils/cn";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-3xl hover:cursor-pointer",
  {
    variants: {
      variant: {
        green:
          "bg-green-800 text-white has-[>svg]:gap-2 hover:bg-green-600 transition-colors duration-300",
        orange:
          "bg-amber-500 text-white has-[>svg]:gap-2 hover:bg-amber-400 transition-colors duration-300",
      },
      size: {
        sm: "px-[14px] text-[14px] py-2",
        md: "px-4 py-[10px] text-[14px]",
        lg: "px-[18px] py-[10px] text-[16px]",
        xl: "px-4 py-3 text-[14px] md:px-6 md:py-3 md:text-[20px]",
        smIcon: "p-2",
        mdIcon: "p-[10px]",
        lgIcon: "p-3",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "sm",
    },
  }
);

function Button({ className, variant, size, children, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
