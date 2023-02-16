import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Knowledge from "./pages/Knowledge";

const App = () => {
  // let location = useLocation();
  return (
    <>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="Knowledge" element={<Knowledge />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;
