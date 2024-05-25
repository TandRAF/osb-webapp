import "../SCSS/SCSS-Pages/Contacte.scss";
import { Crown } from "../assets/Icons/Icons"

export const Contacte = () => {

  return (
    <>
    <div className="contacte-conatiner">
      <section className="contacte-text">
          <Crown/>
        <div className="contacte-text-h1-svg">
          <h1>
            <b>Împreună putem face <br /> mai Mult - </b> Contactează-ne <br /> pentru a Începe
          </h1>
        </div>
        <p>
        {/* <br /> */}
        Vrei să aduci schimbarea în lume? Alătură-te echipei noastre de voluntari
        pentru a face un impact pozitiv în comunitatea noastră. La OSB, credem
        că fiecare gest contează și că împreună putem crea un viitor mai luminos
        pentru toți. Hai să lucrăm împreună pentru a face o schimbare reală! 
        </p>
      </section>
      <section className="write-message-box">
        <div className="message-block">
          <div className="message-block-title">
            <p>Scrie un mesaj</p>
          </div>
          <div className="message-block-content">
            <div className="message-block-parameters">
              <div className="circle"></div>
              <p>Nume Prenume:</p>
            </div>
            <div className="message-block-parameters">
              <div className="circle"></div>
              <p>Mail:</p>
            </div>
            <div className="message-block-parameters">
              <div className="circle"></div>
              <p>Subiect:</p>
            </div>
            <div className="message-block-text-button">
              <div className="message-block-text">
                <p>Mesaj:</p>
              </div>
              <div className="message-block-button">
                <button>Trimite</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>

  )
}
