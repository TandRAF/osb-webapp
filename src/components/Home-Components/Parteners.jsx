import "../../SCSS/SCSS-Components/SCSS-home-components/Parteners.scss"
import { Stars } from "../../assets/Icons/Icons"
import UVT from "../../assets/Images/Parteners/LogoUVT.png"
import UPT from "../../assets/Images/Parteners/LogoUPT.png"
import UFMF from "../../assets/Images/Parteners/LogoUFMF.png"
import CJT from "../../assets/Images/Parteners/LogoCJT.png"
import Primaria from "../../assets/Images/Parteners/LogoPrimaria.png"

export const Parteners = () => {
  return (
    <section className="parteners-section">
        <Stars/>
        <h2>Partenerii <b>noștrii</b></h2>
        <p>Ne mândrim cu colaborările noastre cu diverse organizații și comunități,  alături de care lucrăm pentru a sprijini diaspora basarabeană din  Timișoara.</p>
        <div className="parteners-section-logos">
          <img src={UVT} alt="UVT" />
          <img src={UPT} alt="UPT" />
          <img src={UFMF} alt="UFMF" />
          <img src={CJT} alt="CJT" />
          <img src={Primaria} alt="Primaria" />
        </div>
    </section>
  )
}
