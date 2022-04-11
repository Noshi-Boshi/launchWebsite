import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NavbarMob from "./components/navbar_mob";
import Footer from "./components/Footer";
import FooterMob from "./components/Footer_mob";

import Delivery from "./pages/Delivery";
import Policy from "./pages/Policies";
import Cancellation from "./pages/Cancellation";
import Terms from "./pages/Terms";

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className="App">
      <BrowserRouter>
        {width > 768 ? <Navbar /> : <NavbarMob />}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="deliveryShipping" element={<Delivery />} />

          <Route path="privacyPolicy" element={<Policy />} />

          <Route path="cancellationAndRefund" element={<Cancellation />} />

          <Route path="termsOfService" element={<Terms />} />
        </Routes>

        {width > 765 ? <Footer /> : <FooterMob />}
      </BrowserRouter>
    </div>
  );
}

export default App;
