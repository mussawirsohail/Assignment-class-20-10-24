import Image from "next/image";
import Header from "./components/header";
import Main from "./middlecontact/page";
import About from "./about/page";
import MissionStatement from "./mission statement/page";
import Projects from "@/project/page";
import Contactus from "./contactus/page";
import Footer from "./components/footer";
export default function Home() {
  return (
      <>
      <Header/>
      <Main/>
      <About/>
      <MissionStatement/>
      <Projects/>
      <Contactus/>
      <Footer/>  
      </>
  );
}
