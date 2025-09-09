
import { Input as ShadCnInput} from "@/components/ui/input"
import { cn } from "@/lib/utils"
const Input = ({placeholder, className}) => {
  return (
    <ShadCnInput placeholder={placeholder} className={cn("w-40 text-center")} />
  )
}

export default Input
