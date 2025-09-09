import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import { DonutChart } from "../atoms/Donut"
import { PaymentDistributionLegend } from "../molecules/PaymentDistegend"

interface PaymentDistributionProps {
  principal: number
  totalAmount: number
  totalInterest: number
}

export function PaymentDistribution({ principal, totalAmount, totalInterest }: PaymentDistributionProps) {
  const principalPercentage = (principal / totalAmount) * 100
  const interestPercentage = (totalInterest / totalAmount) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Payment Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex  items-center justify-center gap-5 px-1">
            <PaymentDistributionLegend principalPercentage={principalPercentage} interestPercentage={interestPercentage} />

              <DonutChart principalPercentage={principalPercentage} interestPercentage={interestPercentage} />
      
        </div>
      </CardContent>
    </Card>
  )
}
