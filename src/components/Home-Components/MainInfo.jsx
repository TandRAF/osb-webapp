import { Crown,Stars } from "../../assets/Icons/Icons"
import { Link } from "react-router-dom"
import "../../SCSS/SCSS-Components/SCSS-home-components/MainInfo.scss"
import Anosr from "../../assets/Images/Companies/LogoANOSR.png"
import COSPol from "../../assets/Images/Companies/LogoCOSPol.png"
import FITT from "../../assets/Images/Companies/LogoFITT.png"
import FTB from "../../assets/Images/Companies/LogoFTB.png"
import Ilustration from "../../assets/Images/main-img.png"

export const MainInfo = () => {
  return (
    <>
    <main className="main-content-block">
      <section className="main-text">
        <div className="main-text-h1-svg">
          <Crown/>
          <h1>
            <b>OSB Timișoara</b> – <b>O</b>rganizația <b>S</b>tudenților <b>B</b>asarabeni din Timișoara
          </h1>
        </div>
        <p>
        OSB Timișoara – Organizația Studenților Basarabeni 
        din Timișoara, o comunitate dedicată promovării 
        intereselor și valorilor studenților basarabeni. 
        </p>
        <div className="main-buttons">
          <Link to="/contacte">Contactează-ne</Link>
          <Link to="/despre-noi">Mai multe detalii</Link>
        </div>
      </section>
      <img className="main-img" src={Ilustration} alt="" />
      <section className="main-more-info">
        <div className="main-scope-info">
          <Stars/>
          <h3><b>Scopul</b> nostru </h3>
          <p>
          Scopul principal al OSB Timișoara este integrarea și reprezentarea tinerilor din Republica Moldova, veniți la studii în Timișoara prin organizarea proiectelor de ordin cultural, educativ și divertisment.
          </p>
        </div>
        <div className="main-parteners-info">
        <Stars/>
          <h3>Facem <b>parte</b> din</h3>
          <div className="parteners-logos">
              <img src={Anosr} alt="ANOSR" />
              <img src={COSPol} alt="COSPol" />
              <img src={FITT} alt="FITT" />
              <img src={FTB} alt="FTB" />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}