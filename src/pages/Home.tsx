import { Link } from "react-router-dom";
import { AboutCompany } from "../components/AboutCompany";
import CompanyServices from "../components/CompanyServices";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { KnowMore } from "../components/KnowMore";



export function Home(){

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main>
        <div className="flex flex-col content-center max-w-screen-lg m-auto h-screen max-h-[92vh] items-center justify-center">
          <h1 className="text-7xl text-center text-black mb-6 font-semibold">Já pensou em terceirizar sua área financeira?</h1>
          <span className="text-sm text-center text-black">cuidamos da sua vida financeira e você foca no negócio!</span>
          <Link to={`/About`} className="border-solid border-blue-400 bg-blue-400 border-2 rounded-2xl px-6 py-1 mt-16 text-white transition ease-in-out hover:bg-white hover:text-blue-400">Saiba Mais</Link>
        </div>
      </main>
      <KnowMore/>
      <CompanyServices/>
      <AboutCompany/>
      <Footer/>
    </div>
  )
}