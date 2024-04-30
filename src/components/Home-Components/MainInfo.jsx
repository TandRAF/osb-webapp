import { Crown,Stars } from "../../assets/Icons/Icons"
import { Link } from "react-router-dom"
import "../../SCSS/SCSS-Components/SCSS-home-components/MainInfo.scss"

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
      <section className="main-img"></section>
      <section className="main-more-info">
        <div className="main-scope-info">
          <Stars/>
          <h3><b>Scopul</b> nostru </h3>
          <p>
            este să oferim suport și sprijin membrilor
             noștri în adaptarea la mediul academic și 
             social din Timișoara, facilitându-le integrarea 
             și dezvoltarea personală și profesională.
          </p>
        </div>
        <div className="main-parteners-info">
        <Stars/>
          <h3>Facem <b>parte</b> din</h3>
          <div className="parteners-logos">

          </div>
        </div>
      </section>
    </main>
    </>
  )
}