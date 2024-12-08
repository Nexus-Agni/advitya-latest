import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ClubEvents } from "./components/ClubEvents";
import { TechEvents } from "./pages/TechEvents";
import { NonTechEvents } from "./pages/NonTechEvents";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import ProNight from "./pages/ProNight";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<ClubEvents />} />
        <Route path="/technical-events" element={<TechEvents />} />
        <Route path="/non-technical-events" element={<NonTechEvents />} />
        {/* <Route path="/pro-night" element={<ProNight />} /> */}
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </>
  );
}

export default App;
