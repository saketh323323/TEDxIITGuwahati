import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Events from './pages/events/eventsIndex'
import Event23 from "./pages/events/2023/Event_23.js"
import Event22 from "./pages/events/2022/Event_22.js"
import Event21 from "./pages/events/2021/Event_21.js"
import Event19 from "./pages/events/2019/Event_19.js"
import Event16 from "./pages/events/2016/Event_16.js"
import AboutUs from './pages/aboutUs/AboutUs'
import ContactUs from './pages/contactUs/ContactUs'
import Partners from './pages/partners/Partners'
import Registration from './pages/registration/Registration'
import Privacy from './pages/privacy/Privacy'
import Terms from './pages/terms/Terms'
import PaymentRedirect from "./pages/paymentRedirect/Redirect.js"
import Success from "./pages/success/success.js"
import Speaker_1 from "./components/speaker/speaker_1.js";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Events/2023" element={<Event23/>} />
        <Route path="/Events/2022" element={<Event22/>} />
        <Route path="/Events/2021" element={<Event21/>} />
        <Route path="/Events/2019" element={<Event19/>} />
        <Route path="/Events/2016" element={<Event16/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Registration" element={<Registration/>}></Route>
        <Route path="/Speaker" element={<Speaker_1/>}></Route>
        {/* <Route path="/payment_redirect" element={<PaymentRedirect/>}/>
        <Route path="/success" element={<Success/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
