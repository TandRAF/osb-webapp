import { Stars } from '../../assets/Icons/Icons'
import Anosr from "../../assets/Images/Companies/LogoANOSR.png"
import COSPol from "../../assets/Images/Companies/LogoCOSPol.png"
import FITT from "../../assets/Images/Companies/LogoFITT.png"
import FTB from "../../assets/Images/Companies/LogoFTB.png"
import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/Purpose.scss";

export const PurposeParteners = () => {
  return (
    <section className="purpose-more-info">
        <div className="main-parteners-info">
        <Stars/>
          <h2>Facem <b>parte</b> din</h2>
          <div className="parteners-logos">
              <img src={Anosr} alt="ANOSR" />
              <img src={FTB} alt="FTB" />
              <img src={FITT} alt="FITT" />
              <img src={COSPol} alt="COSPol" />
          </div>
        </div>
      </section>
  )
}
