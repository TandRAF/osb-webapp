import { Facebook, Instagram, TikTok } from "./Icons/MediaIcons"
import AnaMariaImg from "../assets/Images/Reviews-Images/AnaMariaImg.jpg"
import DanImg from "../assets/Images/Reviews-Images/DanImg.jpg"
import EvelinaImg from "../assets/Images/Reviews-Images/EvelinaImg.jpg"
import LiviuImg from "../assets/Images/Reviews-Images/DanImg.jpg"
import VeronicaImg from "../assets/Images/Reviews-Images/VeronicaImg.jpg"
import LunaSportiva from "../assets/Images/LunaSportiva.png"
import { PhoneNumber, Mail, Location } from "../assets/Icons/ContacteIcons"

export const menuItem = [
    {
      key: 1,
      title: "Acasă",
      link: "/"
    },
    {
      key: 2,
      title: "Despre Noi",
      link: "/despre-noi"
    },
    {
      key: 3,
      title: "Evenimente",
      link: "/evenimente"
    },
    {
      key: 4,
      title: "Contacte",
      link: "/contacte"
    }
  ]
  export const menuIcons = [
    {
      key: 1,
      title: "Instagram",
      Icon: Instagram,
      link: "https://www.instagram.com/osbtimisoara/?hl=en"
    },
    {
      key: 2,
      title: "Facebook",
      Icon: Facebook,
      link: "https://www.facebook.com/osbtimisoara/?locale=ro_RO"
    },
    {
      key: 3,
      title: "Tiktok",
      Icon: TikTok,
      link: "https://www.tiktok.com/@osb_timisoara"
    }
  ]
  export const reviewItems = [
    {
      text: 
      " Organizația studenților Basarabeni din Timișoara este locul care a devenit “acasă” chiar și la 1000 de km distanță. Iar evenimentele culturale și educaționale au adăugat o notă specială experienței de student și au contribuit la formarea mea ca și adult în acest oraș minunat.",
      name: "Barbaneagra Liviu",
      status: "Voluntar",
      src: LiviuImg,
    },
    {
      text: 
      " Nu m-aș fi gândit vreodată că voi găsi la Timișoara un loc unde să îmi găsesc familia și să mă simt „acasă”. OSB Timișoara adună împreună cei mai frumoși, mai iubitori, creativi și amuzanți omuleți. Alături de iei simt că prind aripi și orice e posibil.",
      name: "Sava Ana Maria",
      status: "Fost Președinte",
      src:  AnaMariaImg
    },
    {
      text: 
      " OSB Timișoara este cu și despre oameni, așa cum îmi place mie să zic. Fiecare membru al organizației aduce cu el sau ea nu doar o dorință de a se implica în voluntariat, ci și o pasiune pentru schimbare și zâmbete molipsitoare! Împreună, această echipă minunată nu doar că organizează evenimente și proiecte faine, ci creează momente care rămân adânc întipărite în suflet!",
      name: "Balanici Anastasia",
     status: "Fost președinte",
      src:  "None"
    },
    {
      text: 
      " Organizația Studenților Basarabeni din Timișoara mi-a oferit un spațiu sigur în care m-am descoperit, mi-am îmbunătățit abilitățile de comunicare, organizare și calitatea de lider. Voluntarii OSB primesc cu brațele deschise pe toți cei dornici de a face o schimbare în lume și oferă suport și resurse pentru dezvoltarea și integrarea studenților români de pretutindeni în comunitatea timișoreană.",
      name: "Mocanu Veronica",
      status: "Fost Vice-Preșdinte FR",
      src:  VeronicaImg
    },
    {
      text: 
      "OSB Timișoara este pentru mine mai mult decât un grup de voluntari, OSB pentru mine reprezintă locul unde mă simt sigură și apreciată, locul unde am legat prietenii și locul unde am evoluat, atât din puct de vedere personal, cât și din punct de vedere profesional. OSB Timișoara sunt oamenii cu care dorul de casă nu se simte atât de acut.",
      name: "Cebotari Evelina",
      status: "Fost Vice-Preșdinte Edu",
      src:  EvelinaImg
    },
    {
      text: 
      "Organizația Studenților Basarabeni din Timișoara este despre evenimente grozave, prietenii durabile, multă distracție și momente de neuitat! Locul perfect în care te poți simți mult mai aproape de casă și familie!",
      name: "Voluța Daniil",
      status: "Voluntar",
      src:  DanImg
    },
  ]
  export const questionAnswers = [
    {
      key: 1,
      question:"Cum pot deveni membru al organizație i?",
      answer: "Pentru a deveni membru al organizației noastre, vă rugăm să completați  formularul de înscriere disponibil pe site-ul nostru sau să ne  contactați pentru mai multe informații. Vom fi bucuroși să vă oferim  detalii suplimentare despre avantajele membrilor și procedurile de  înscriere."
    },
    {
      key: 2,
      question:"Ce proiecte sunt disponibile pentru voluntariat ?",
      answer: "vă rugăm să completați  formularul"
    },
    {
      key: 3,
      question:"Care sunt modalitățile de plată acceptate pentru donații ?",
      answer: "vă rugăm să completați  formularul"
    },
    {
      key: 4,
      question:"Cum pot raporta o problemă sau oferi feedback ?",
      answer: "vă rugăm să completați  formularul"
    },
    {
      key: 5,
      question:"Cum pot raporta o problemă sau oferi feedback ?",
      answer: "vă rugăm să completați  formularul"
    },
  ]
  export const Months = ["Septembrie", "Octombrie", "Noiembrie", "Decembrie", "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August"];
  export const EventsCards = [
    {
      index: 1,
      title : "Cupa de Volei",
      date : 1,
      time: "00:00",
      month : "Aprilie",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    },
    {
      index: 2,
      title : "Cupa de Volei",
      date : 13,
      time: "00:00",
      month : "Aprilie",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    },
    {
      title : "Cupa de Volei",
      date : 10,
      time: "00:00",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    },
    {
      index: 3,
      time: "00:00",
      month : "Aprilie",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    },
    {
      title : "Cupa de Volei",
      date : 10,
      time: "00:00",
      month : "Aprilie",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
    },
    {
      index: 3,
      time: "00:00",
      month : "Aprilie",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    },
    {
      index: 3,
      title : "Cupa de Volei",
      date : 10,
      time: "00:00",
      month : "Aprilie",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    },
    {
      index: 4,
      title : "Cupa de Volei",
      date : 22,
      time: "00:00",
      month : "Mai",
      description : "Anunțăm că în urma tragerii la sorți, s-au stabilit ",
      img : LunaSportiva
    }
  ]
  export const contacteInfo = [
    {
      key: 1,
      icon: PhoneNumber,
      title: "Număr de telefon",
      info: "06486367362"
    },
    {
      key: 2,
      icon: Mail,
      title: "Mail",
      info: "osb_timisoara.gmail.ro"
    },
    {
      key: 3,
      icon: Location,
      title: "Locația",
      info: "osb_timisoara.gmail.ro"
    }
  ]