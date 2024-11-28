import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/Mission.scss";
import { Stars } from "../../assets/Icons/Icons";

const MissionText = [
    {
        nr: 1,
        text: "Facilitarea integrării studenților în comunitatea locală timișoreană"
    },
    {
        nr: 2,
        text: "Reprezentarea studenților asigurându-se că vocea lor este auzită la toate nivelurile, de la universități până la autorități naționale și internaționale"
    },
    {
        nr: 3,
        text: "Promovarea solidarității și colaborării între studenți creând un mediu de sprijin și unitate în comunitate"
    },
    {
        nr: 4,
        text: "Oferirea de suport și resurse pentru dezvoltarea personală și profesională, ajutând membrii să își atingă potențialul maxim în diverse domenii."
    }
]

export const Mission = () => {
  return (
    <section className='mission-container'>
        <div className="mission-text">
            <Stars/>
            <h2>Misiunea <b>Noastră</b></h2>
            <p><b>OSB Timișoara reprezentă</b> interesele legitime ale studenților români de pretutinden, cetățeni ai Republicii Moldova, veniți la studii în Timișoara și integrarea acestora, prin organizarea proiectelor de ordin cultural, educativ și recreațional. </p>
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
