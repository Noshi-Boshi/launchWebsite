import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Delivery from "./pages/Delivery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/contactUs" element={<ContactUs />} />
          </Routes>
          <Routes>
            <Route exact path="/deliveryShipping" element={<Delivery />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
