import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { MinimalLayout } from "./layouts/MinimalLayout";
import HomePage from "./pages/HomePage/HomePage";
import Editor from "./pages/Editor/Editor";
import { ModelViewer } from "./pages/ModelViewer/ModelViewer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
   return (
      <Routes>
         <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="*" element={<Navigate to="/" />} />
         </Route>
         <Route element={<MinimalLayout />}>
            <Route path="/model-viewer" element={<ModelViewer />} />
         </Route>
      </Routes>
   );
}

export default App;
library.add(fab, fas, far);
