import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";



export function About(){
  const {slug} = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Footer/>
    </div>
  )
}