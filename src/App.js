import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NavbarMob from "./components/navbar_mob";
import Footer from "./components/Footer";
import FooterMob from "./components/Footer_mob";
import Delivery from "./pages/Delivery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Helmet } from "react-helmet";

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </Helmet>
      <Router>
        {width > 768 ? <Navbar /> : <NavbarMob />}
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/deliveryShipping" element={<Delivery />} />
          </Routes>
        </main>
        {width > 768 ? <Footer /> : <FooterMob />}
      </Router>
    </div>
  );
}

export default App;
