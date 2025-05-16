import { Hero } from "../sections/Hero";
import { Crafting } from "../sections/Crafting";
import { Description } from "../sections/Description";
import { Process } from "../sections/Process";
import { Create } from "../sections/Create";
import { Visualizer } from "../sections/Visualizer";
import { Catalog } from "../sections/Catalog";
import { Questions } from "../sections/Questions";

const HomePage = () => {
   return (
      <div className="landing-container">
         <Hero />
         <Description />
         <Crafting />
         <Process />
         <Create />
         <Visualizer />
         <Catalog />
         <Questions />
      </div>
   );
};

export default HomePage;
