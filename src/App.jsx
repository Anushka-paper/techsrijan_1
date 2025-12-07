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
import Events from "./pages/Events";
import Flashcard from "./components/Flashcard";
import Creators from "./pages/Creators";
import BombDiffusion from "./pages/RCevents/BombDiffusion"
import ElectroNFS from "./pages/RCevents/ElectroNFS"
import ElectroTekken from "./pages/RCevents/ElectroTekken"
import Sherlocked from "./pages/RCevents/Sherlocked"



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/leaderboard" element={<LeaderboardNew />} />
        <Route path ='/admin' element = {<AdminNew/>}/>
        <Route path ="/events" element ={<Events/>}/>
        <Route path ="/flashcard" element ={<Flashcard/>}/>
        <Route path ="/creators" element ={<Creators/>}/>
        <Route path="/BD" element={<BombDiffusion/>}/>
        <Route path="/NFS" element={<ElectroNFS/>}/>
        <Route path="/Tekken" element={<ElectroTekken/>}/>
        <Route path="/Sher" element={<Sherlocked/>}/>

      </Routes>
    </>
  );
};

export default App;
