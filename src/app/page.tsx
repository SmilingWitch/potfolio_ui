import Principel from "@/components/Home";
import Image from "next/image";
import About from "@/components/About";
import { Experience } from "@/components/Esperience";

export default function Home() {
  return (
    <main /*className="flex min-h-screen flex-col items-center justify-between p-24"*/>
    
    <Principel/>
    <About/>
    <Experience/>
        </main>
  );
}
