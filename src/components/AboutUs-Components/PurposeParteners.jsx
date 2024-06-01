import { Stars } from '../../assets/Icons/Icons'
import Anosr from "../../assets/Images/Companies/LogoANOSR.png"
import COSPol from "../../assets/Images/Companies/LogoCOSPol.png"
import FITT from "../../assets/Images/Companies/LogoFITT.png"
import FTB from "../../assets/Images/Companies/LogoFTB.png"
import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/Purpose.scss";

export const PurposeParteners = () => {
  return (
    <section className="purpose-more-info">
        <div className="purpose-scope-info">
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
  )
}
