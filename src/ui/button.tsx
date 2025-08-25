import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonDefaultStyles = "cursor-pointer transition-all duration-300";
const buttonStyles = cva(buttonDefaultStyles, {
  variants: {
    variant: {
      "primary": "",
      "secondary": ""
    },
    size: {
      "sm": "",
      "md": "",
      "lg": ""
    }
  }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  text: string;
  isDisabled: boolean;
  onClick ?: () => void;
}

export default function Button({
  variant,
  size,
  text,
  onClick,
  isDisabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} 
      className={cn(
        buttonStyles({variant, size}),
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}