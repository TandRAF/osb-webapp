import "../SCSS/SCSS-Pages/AboutUs.scss";
import { MainInfo } from "../components/AboutUs-Components/MainInfo";
import { PurposeParteners } from "../components/AboutUs-Components/PurposeParteners";
import { Mission } from "../components/AboutUs-Components/Mission";
import { Departaments } from "../components/AboutUs-Components/Departaments";
import { ManageOffice } from "../components/AboutUs-Components/ManageOffice";
import { History } from "../components/AboutUs-Components/History";
export const AboutUs = () => {
  return (
    <section className="about-us-container">
      <MainInfo/>
      <History/>
      <Mission/>
      <PurposeParteners/>
      <Departaments/>
      <ManageOffice/>
    </section>
  )
}
