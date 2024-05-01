import "../SCSS/SCSS-Pages/Home.scss"
import { MainInfo } from "../components/Home-Components/MainInfo"
import { Parteners } from "../components/Home-Components/Parteners"
import { Statistic } from "../components/Home-Components/Statistic"
import { Reviews } from "../components/Home-Components/Reviews"
import { FAQ } from "../components/Home-Components/FAQ"

export const Home = () => {
  return (
    <>
    <div className="home-conatiner">
      <MainInfo/>
      <Parteners/>
      <Statistic/>
      <Reviews/>
      <FAQ/>
    </div>
    </>
  )
}