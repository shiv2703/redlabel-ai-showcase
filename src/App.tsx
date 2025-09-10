import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
