import React from "react"
import Heading from "../atoms/Heading"
import LoanForm from "../organisms/LoanForm"
import { EMIBreakdownItem } from "../organisms/EMI_Breakdown"
import Card from "../atoms/Card"
import { PaymentDistribution } from "../organisms/PaymentDistribution"
import Button from "../atoms/Button"
import { RepaymentSchedule } from "../atoms/TableModel"

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = React.useState([50000])
  const [interestRate, setInterestRate] = React.useState([10])
  const [loanTenure, setLoanTenure] = React.useState([24])
   

  const calculateEMI = () => {
    const principal = loanAmount[0]
    const rate = interestRate[0] / 100 / 12
    const tenure = loanTenure[0]
    if (rate === 0) return principal / tenure 
    return (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
  }

  const generateSchedule = () => {
    const principal = loanAmount[0]
    const rate = interestRate[0] / 100 / 12
    const tenure = loanTenure[0]
    const emi = calculateEMI()
    const schedule = []
    let balance = principal

    for (let month = 1; month <= tenure; month++) {
      const interestPayment = balance * rate
      const principalPayment = emi - interestPayment
      balance -= principalPayment

      schedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      })
    }
    return schedule
  }

  const emi = React.useMemo(()=>calculateEMI(), [loanAmount, interestRate, loanTenure]);
  const principal = loanAmount[0]
  const totalAmount = emi * loanTenure[0]
  const totalInterest = totalAmount - principal
    const schedule = React.useMemo(()=>generateSchedule(), [loanAmount, interestRate, loanTenure])
  
  
  

  return (
    <div className="bg-[url(/bg.png)] p-6 space-y-8">
        <div className="flex items-start flex-col gap-4 md:flex-row md:items-center justify-between">
        <Heading />
        <div className="flex gap-2 items-center justify-center">
         <Button variant="reset">
  <span className="text-heading-7">Reset Calculator</span>
</Button>

<Button variant="apply">
  <span className="text-heading-7 font-semibold">Apply Loan</span>
</Button>

        </div>
     
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <LoanForm 
        loanAmount={loanAmount}
        loanTenure={loanTenure}
        setLoanTenure={setLoanTenure}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
      />
 
      <div className="flex flex-col gap-3">
        <Card>
        <h1>Monthly Breakdown</h1>
        <EMIBreakdownItem
          label="Monthly EMI"
          value={`Nu. ${emi.toFixed(2)}`}
          isHighlighted
        />
        <EMIBreakdownItem
          label="Principal Amount"
          value={`Nu. ${principal.toLocaleString()}`}
        />
        <EMIBreakdownItem
          label="Total Interest"
          value={`Nu. ${totalInterest.toFixed(2)}`}
        />
        <EMIBreakdownItem
          label="Total Amount Payable"
          value={`Nu. ${totalAmount.toFixed(2)}`}
        />
      </Card>
                    <PaymentDistribution principal={principal} totalAmount={totalAmount} totalInterest={totalInterest} />
     </div>

      
      </div>
       <div className="mt-6">
           <RepaymentSchedule schedule={schedule} />
          </div>
      
      
    </div>
  )
}

export default EMICalculator
