
import {
  Card as ShadCnCard,

} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<typeof ShadCnCard>{
    variant?: "default" | "elevated" | "outlined"
}
const Card = ({children, className, variant= "default", ...props}:CardProps) => {
  return (
    <ShadCnCard className={cn("rounded-2xl p-4 transtition",
        variant==="default"&& "bg-white shadow-sm",
        variant === "elevated" && "bg-white shadow-lg",
        variant === "outlined" && "border border-gray-200",
        className
    )}{...props}>
        {children}
    </ShadCnCard>
  )
}

export default Card
