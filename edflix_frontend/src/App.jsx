import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home"
import WebDev from "./pages/WebDev"
import AppDev from "./pages/AppDev"
import ProdDev from "./pages/ProdDev"
import SOC from "./pages/SOC"
import Apii from "./pages/Apii";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' pauseOnHover={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebDev />} />
        <Route path="/app" element={<AppDev />} />
        <Route path="/product" element={<ProdDev />} />
        <Route path="/api" element={<Apii />} />
        <Route path="/soc" element={<SOC />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App