import './SCSS/App.scss';
import {Routes, Route } from "react-router-dom";
import {Home,AboutUs,Events,NoPage,Contacte} from "./pages/Pages";
import { Layout } from './Layout';

function App() {
  return (
    <Routes basename='/osb-webapp'>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="despre-noi" element={<AboutUs />} />
        <Route path="evenimente" element={<Events />} /> */}
        <Route path="contacte" element={<Contacte/>}/>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default App
