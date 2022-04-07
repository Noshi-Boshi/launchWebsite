import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NavbarMob from "./components/navbar_mob";
import Footer from "./components/Footer";
import FooterMob from "./components/Footer_mob";

import Delivery from "./pages/Delivery";
import Policy from "./pages/Policies";
import Cancellation from "./pages/Cancellation";
import Terms from "./pages/Terms";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className="App">
      <Router>
        {width > 768 ? <Navbar /> : <NavbarMob />}
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/deliveryShipping" element={<Delivery />} />
          </Routes>
          <Routes>
            <Route exact path="/privacyPolicy" element={<Policy />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/cancellationAndRefund"
              element={<Cancellation />}
            />
          </Routes>

          <Routes>
            <Route exact path="/termsOfService" element={<Terms />} />
          </Routes>
        </main>
        {width > 765 ? <Footer /> : <FooterMob />}
      </Router>
    </div>
  );
}

export default App;
