
import { Tabs as ShadCnTabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Tabs = () => {
  return (
  <ShadCnTabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="monthly">Monthly</TabsTrigger>
    <TabsTrigger value="annually">Annually</TabsTrigger>
  </TabsList>
  
</ShadCnTabs>
  )
}

export default Tabs
