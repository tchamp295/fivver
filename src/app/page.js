import Faq from "@/components/faqs/Faq";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import Stat from "@/components/stat/Stat";


export default function Home() {
  return (
    <div className=" flex flex-col ">
      <Navbar />
      <Services />
      <Faq />
      <Stat/>
      <Footer/>
   </div>
  );
}
