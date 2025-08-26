import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonDefaultStyles = "h-fit w-fit tracking-tight cursor-pointer transition-all duration-300 text-center";
const buttonStyles = cva(buttonDefaultStyles, {
  variants: {
    variant: {
      primary: "bg-honey-500 text-white border border-honey-800/75 hover:ring-4 hover:ring-honey-100 ring-offset-honey-50 hover:ring-offset-1",
      secondary: "bg-honey-50 text-honey-600 border border-honey-600/75 hover:ring-4 hover:ring-honey-100 ring-offset-honey-50 hover:ring-offset-1",
      disabled: "opacity-75 cursor-not-allowed bg-gray-200 hover:bg-gray-300"
    },
    size: {
      xs: "py-1.5 px-7 text-base font-medium tex-shadow-xs rounded-lg shadow-xs",
      sm: "py-2 px-10 text-lg font-semibold text-shadow-xs rounded-lg shadow-xs",
      md: "py-2.5 px-15 text-2xl font-semibold text-shadow-xs rounded-xl shadow-sm",
      lg: "py-2.5 px-17.5 text-2xl font-semibold text-shadow-xs rounded-xl shadow-sm",
    }
  },
  compoundVariants: [
    {
      variant: ["primary"],
      className: "text-shadow-honey-600 shadow-honey-800/75"
    },
    {
      variant: ["secondary"],
      className: "text-shadow-honey-100 shadow-honey-600/75"
    }
  ],
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Required<VariantProps<typeof buttonStyles>> {
  text: string;
  isLoading?: boolean;
  onClick ?: () => void;
}

export default function Button({
  variant,
  size,
  isLoading,
  text,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} 
      className={cn(
        props.disabled || isLoading
        ? buttonStyles({variant: "disabled", size})
        : buttonStyles({variant, size}),
        className
      )}
      onClick={onClick}
      disabled={props.disabled || isLoading}
    >
      {text}
    </button>
  )
}