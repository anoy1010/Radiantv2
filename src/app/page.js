import About from "@/pages/About/About";
import Homepage from "@/pages/Home/Homepage";
import Services from "@/pages/Services/Services";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";

export default function Home() {
  return (
    
      <ScrollShadow size={200} className="w-full h-full">
        <About />
      </ScrollShadow>
    
  );
}
