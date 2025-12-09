import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import LeaderboardNew from "./pages/leaderboard";
import Home from "./pages/Home";
import AdminNew from "./pages/AdminNew";

import Flashcard from "./components/Flashcard";
import Creators from "./pages/Creators";
import BombDiffusion from "./pages/RCevents/BombDiffusion";
import ElectroNFS from "./pages/RCevents/ElectroNFS";
import ElectroTekken from "./pages/RCevents/ElectroTekken";
import Sherlocked from "./pages/RCevents/Sherlocked";
import Lamira from "./pages/TSCevents/Lamira";
import MalaviyaAeromodelling from "./pages/TSCevents/MalaviyaAeromodelling";
import ScienceExhibition from "./pages/TSCevents/ScienceExhibition";
import Glimpses from "./pages/Glimpse";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path ='/admin' element = {<AdminNew/>}/>
        <Route path ="/glimpse" element ={<Glimpses/>}/>

        <Route path ="/flashcard" element ={<Flashcard/>}/>
        <Route path ="/creators" element ={<Creators/>}/>

        {/* RC Events */}
        <Route path="/BD" element={<BombDiffusion/>}/>
        <Route path="/NFS" element={<ElectroNFS/>}/>
        <Route path="/Tekken" element={<ElectroTekken/>}/>
        <Route path="/Sher" element={<Sherlocked/>}/>

        {/* TSC Events */}
        <Route path="/Lamira" element={<Lamira/>}/>
        <Route path="/Aeromodelling" element={<MalaviyaAeromodelling/>}/>
        <Route path="/ScienceExpo" element={<ScienceExhibition/>}/>
      </Routes>
    </>
  );
};

export default App;
