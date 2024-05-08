import { Crown } from "../../assets/Icons/Icons";
import "../../SCSS/SCSS-Components/SCSS-home-components/Statistic.scss";
export const Statistic = () => {
  return (
    <>
    <section className="statistic-info-count">
        <div className="statistic-info">
            <Crown/>
            <h2>Comunitatea Noastra devine mai buna cu <b>voi</b></h2>
            <p>De-a lungul anilor, comunitatea noastră a crescut și s-a dezvoltat într-o rețea puternică și solidară.</p>
        </div>
        <div className="statistic-count">
            <div className="statistic-count-info">
                <span> <span>2</span>00</span>
                <h3>Membrii</h3>
            </div>
            <div className="statistic-count-info">
                <span> <span>1</span>1</span>
                <h3>Proiecte</h3>
            </div>
            <div className="statistic-count-info">
                <span> <span>2</span>3</span>
                <h3>Ani</h3>
            </div>
        </div>
    </section>
    </>
  )
}
