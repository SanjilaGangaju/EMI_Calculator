import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/components/ui/button"
import React from "react"


type Variant = "default" | "reset" | "apply"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: Variant
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variants: Record<Variant, string> = {
    default: "bg-gray-200 text-black",
    reset: "bg-gray-100 border border-brand-primary text-black hover:bg-gray-200",
    apply: "bg-brand-secondary text-white hover:bg-gray-600",
  }

  return (
    <ShadcnButton
      className={cn("rounded-lg px-4 py-2", variants[variant], className)}
      {...props}
    >
      {children}
    </ShadcnButton>
  )
}

export default Button
