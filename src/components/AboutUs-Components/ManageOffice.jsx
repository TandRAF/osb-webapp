import "../../SCSS/SCSS-Components/SCSS-about-us-Componets/ManageOffice.scss"
import { BcMembers } from "../../assets/content"
import { Crown } from "../../assets/Icons/Icons"
export const ManageOffice = () => {
  return (
    <section className="bc-members-container">
        <Crown></Crown>
        <h2>Biroul de <b>Conducere</b></h2>
        <div className="bc-members-blocks">
            {BcMembers.map((item, index)=>{
                return(
                    <div key={index} className="member-block">
                        <img src={item.img} alt={item.name} />
                        <span><b>{item.name}</b></span>
                        <span>{item.status}</span>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
