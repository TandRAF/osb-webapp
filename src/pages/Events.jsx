import "../SCSS/SCSS-Pages/Events.scss"
import { Crown } from "../assets/Icons/Icons"
import { EventsBlocks } from "../components/EventsBlocks"

export const Events = () => {
  return (
    <section className="events-container">
      <div className="events-main-text">
        <div className="text-block">
          <Crown/>
          <h2>Descoperă Evenimentele Noastre</h2>
          <p>Bun venit în lumea evenimentelor noastre! La [Numele Organizației], ne  angajăm să promovăm și să celebrăm diversitatea culturală într-o  varietate de evenimente. Fii la curent cu  evenimentele noastre viitoare și alătură-te comunității noastre pentru a  sărbători împreună bogăția culturii noastre.</p>
        </div>
      </div>
      <EventsBlocks/>
    </section>
  )
}
