interface PaymentDistributionLegendProps {
  principalPercentage: number
  interestPercentage: number
}

export function PaymentDistributionLegend({ principalPercentage, interestPercentage }: PaymentDistributionLegendProps) {
  return (
    <div className="space-y-1">
      <div className="flex  items-center gap-2">
        <div className="size-3 bg-teal-500 rounded-full"></div>
        <span className="text-sm">Principal</span>
        <span className="ml-auto font-semibold">{principalPercentage.toFixed(1)}%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-3 bg-orange-500 rounded-full"></div>
        <span className="text-sm">Interest</span>
        <span className="ml-auto font-semibold">{interestPercentage.toFixed(1)}%</span>
      </div>
    </div>
  )
}
