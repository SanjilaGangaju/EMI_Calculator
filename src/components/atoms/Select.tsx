
interface SelectProps{
    options: string[],
    placeholder?: string
}
import {
  Select as ShadCnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Select = ({options, placeholder, }:SelectProps) => {
  return (
   
   <ShadCnSelect>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={placeholder} />
  </SelectTrigger>
  <SelectContent>
    {options.map((opt)=>(
            <SelectItem value={opt} >{opt}</SelectItem>


    ))}
  </SelectContent>
</ShadCnSelect>
  )
}

export default Select
