import Card from '../atoms/Card'
import Select from '../atoms/Select'
import Slider from '../atoms/Slider'
import Tabs from '../atoms/Tabs'

interface SliderProps {
  loanAmount: number[]
  setLoanAmount: (value: number[]) => void
  interestRate: number[]
  setInterestRate: (value: number[]) => void
  loanTenure: number[]
  setLoanTenure: (value: number[]) => void
}

const LoanForm = ({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  loanTenure,
  setLoanTenure,
}: SliderProps) => {
  return (
    <Card>
      {/* Top controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-2 order-2 md:order-1  w-full ">
          <Select
            options={[
              'Student Loan',
              'Member Loan',
              'Education Loan',
              'Staff Loan',
              'Housing Loan',
            ]}
            placeholder="Available Loans"
          />
          <Select
            options={['Housing Commerical']}
            placeholder="Select Sub Loan Plan"
          />
        </div>

        {/* Tabs */}
        <div className="order-1 md:order-2 w-full md:w-auto flex justify-center">
          <Tabs />
        </div>
      </div>

      {/* Sliders */}
      <div className="flex flex-col gap-6 mt-8">
        <Slider label="Loan Amount" sublabel="in Ngultrum"
           format="currency"
          value={loanAmount}
          onValueChange={setLoanAmount}
          min={10000}
          max={100000}
          step={1000}
          minLabel="10,000"
          maxLabel="100,000"
          // displayValue={`Nu. ${loanAmount[0] || 0}`}
        />
        <Slider
          label="Interest Rate"
          sublabel="*per annum"
          format="percent"
          value={interestRate}
          onValueChange={setInterestRate}
          min={5}
          max={25}
          step={1}
          minLabel="5"
          maxLabel="25"
          // displayValue={`${interestRate[0] || 0} %`}
        />
        <Slider
          label="Loan Tenure"
          sublabel="in months"
          format="months"
          value={loanTenure}
          onValueChange={setLoanTenure}
          min={1}
          max={36}
          step={1}
          minLabel="1"
          maxLabel="36"
          // displayValue={`${loanTenure[0] || 0} months`}
        />
      </div>
    </Card>
  )
}

export default LoanForm
