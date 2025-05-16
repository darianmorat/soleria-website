import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Editor from "./pages/Editor/Editor";

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
            <Route path="*" element={<Navigate to="/" />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
library.add(fab, fas, far);
