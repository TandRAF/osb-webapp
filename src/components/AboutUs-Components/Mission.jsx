import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/Mission.scss";
import { Stars } from "../../assets/Icons/Icons";

const MissionText = [
    {
        nr: 1,
        text: "Facilita integrarea și adaptarea studenților basarabeni în mediul academic și social din Timișoara"
    },
    {
        nr: 2,
        text: "Promova solidaritatea și colaborarea între studenții basarabeni"
    },
    {
        nr: 3,
        text: " Oferi suport și resurse pentru dezvoltarea personală și profesională a membrilor noștri;"
    },
    {
        nr: 4,
        text: "Reprima interesele și preocupările studenților basarabeni în fața autorităților și instituțiilor relevante."
    }
]

export const Mission = () => {
  return (
    <section className='mission-container'>
        <div className="mission-text">
            <Stars/>
            <h2>Misiunea <b>Noastră</b></h2>
            <p>Misiunea OSB Timișoara este de a oferi sprijin în dezvoltarea personală și profesională a membrilor noștri, organizând evenimente și proiecte care încurajează dialogul intercultural, leadership-ul și responsabilitatea socială.</p>
        </div>
        <div className="mission-blocks">
            {MissionText.map((item)=>{
                return(
                    <div key={item.nr} className="block">
                        <div className="block-number">
                            <span>0</span>
                            <span>{item.nr}</span>
                        </div>
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
