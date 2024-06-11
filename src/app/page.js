import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";


export default function Home() {
  return (
    <div className=" flex flex-col gap-12">
      <Navbar />
      <Services/>
   </div>
  );
}
