import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import Editor from "./pages/Editor";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<Editor />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
library.add(fab, fas, far);
