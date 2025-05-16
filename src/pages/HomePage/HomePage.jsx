import { Catalog } from "../../sections/Catalog/Catalog";
import { Crafting } from "../../sections/Crafting/Crafting";
import { Create } from "../../sections/Create/Create";
import { Description } from "../../sections/Description/Description";
import { Hero } from "../../sections/Hero/Hero";
import { Process } from "../../sections/Process/Process";
import { Questions } from "../../sections/Questions/Questions";
import { Visualizer } from "../../sections/Visualizer/Visualizer";

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
