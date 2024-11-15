import Banner from "./components/Banner/Banner";
import New from "./components/New/New";
import Section1 from "./components/Section1/Section1";
import Promotion from "./components/Section3/Promotion";
import Section2 from "./components/Section2/Section2";
import SupportCustomer from "./components/SupportCustomer/SupportCustomer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 bg-[#f2f7fb]">
          <Banner/>
          <Section1/>
          <Section2/>
          <Promotion/>
          <SupportCustomer/>
          <New/>
    </main>
  )
}
