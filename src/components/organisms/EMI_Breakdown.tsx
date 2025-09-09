

interface EMIBreakdownItemProps {
  label: string
  value: string
  isHighlighted?: boolean
}

export function EMIBreakdownItem({ label, value, isHighlighted = false }: EMIBreakdownItemProps) {
  return (
      
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className={`font-semibold ${isHighlighted ? "text-teal-600" : ""}`}>{value}</span>
    </div>
  )
}
