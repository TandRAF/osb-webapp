import { Crown } from "../../assets/Icons/Icons";
import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/Departaments.scss";

const DepartamentText = [
    {
        nr: 1,
        name: "Departamentul de Resurse Umane",
        description: "Departamentul de Resurse Umane (HR), altfel spus – „sufletul organizației”, menține toți membrii uniți și creează un mediu productiv și cu spirit de echipă. HR-ul organizează ieșiri la evenimente culturale, seri de socializare și party-uri, pentru a fi organizația în forță și plină de putere."
    },
    {
        nr: 2,
        name: "Departamentul de Relații Publice",
        description: "Departamentul de Relații Publice (PR) constituie un multiplicator de forță al organizației. Membrii acestei echipe folosesc toate tacticile comunicare și informare, ei fiind persoanele de la care afli despre tot ce se întâmplă, asigurând legătura dintre imagine și identitatea asociației."
    },
    {
        nr: 3,
        name: "Departamentul de Imagine-IT",
        description: "Departamentul de Imagine-IT oferă culoare tuturor proiectelor, mențin identitatea vizuală a organizației și susține celelalte departamente cu materiale grafice necesare lor."
    },
    {
        nr: 4,
        name: "Departamentul de Proiecte și Fundrainsing",
        description: "Departamentul Proiecte și Fundraising (FR) este partea cea mai rațională a organizației noastre, unde membrii au ocazia să analizeze și să identifice necesitățile financiare ale asociației pe baza bugetului fiecărui eveniment și în funcție de gradul de importanță al acestuia."
    },
    {
        nr: 5,
        name: "Departamentul Social-Educațional",
        description: "Departamentul Social-Educațional (SE) se orientează pe soluționarea problemelor studenților pe care îi reprezintă, implicându-se activ în cadrul mediului universitar. Departamentul reprezintă vocea studenților români de pretutinden, cetățeni ai Republicii Moldova din Timișoara, întrucât are misiunea de a forma o punte de comunicare între studenți și universitate."
    },
]

export const Departaments = () => {
  return (
    <section className="departaments-container">
        <Crown/>
        <h2>Structura <br /> <b>Departamentelor</b></h2>
        <div className="departaments-blocks">
            {DepartamentText.map((item,index) =>{
                return(
                    <div key={item.nr} className={index%2 == 0? "block":"block black"}>
                        <div className="block-number">
                            <span className={index%2 == 0? "" :"black"}>0</span>
                            <span>{item.nr}</span>
                        </div>
                        <h3>{item.name}</h3>
                        <p className="paragraph">{item.description}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
