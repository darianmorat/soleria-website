import { useEffect, useRef } from "react";
import baldosa1 from "../../assets/models/baldosa1.glb";
import baldosa2 from "../../assets/models/baldosa2.glb";
import baldosa1USDZ from "../../assets/models/baldosa1.usdz";
import baldosa2USDZ from "../../assets/models/baldosa2.usdz";
import skybox from "../../assets/models/enviroments/small_hangar_01_1k.jpg";
import hand from "../../assets/models/others/hand.png";
import "./ModelViewer.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/models/others/ic_view_in_ar_new_googblue_48dp.png";

export const ModelViewer = () => {
   const navigate = useNavigate();
   const modelViewerRef = useRef(null);

   useEffect(() => {
      // Set actual viewport height
      const setRealVh = () => {
         const vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty("--vh", `${vh}px`);
      };

      setRealVh();
      window.addEventListener("resize", setRealVh);

      return () => window.removeEventListener("resize", setRealVh);
   }, []);

   useEffect(() => {
      const modelViewer = modelViewerRef.current;
      if (!modelViewer) return;

      const handleSrcChange = (event) => {
         modelViewer.src = event.target.value;
      };

      const srcSelect = modelViewer.querySelector("#src");
      srcSelect?.addEventListener("input", handleSrcChange);

      const checkbox = modelViewer.querySelector("#show-dimensions");
      const dimElements = [
         ...modelViewer.querySelectorAll(
            'button[slot^="hotspot-dim"], button[slot^="hotspot-dot"]',
         ),
         modelViewer.querySelector("#dimLines"),
      ];

      function setVisibility(visible) {
         dimElements.forEach((element) => {
            if (element) {
               if (visible) {
                  element.classList.remove("hide");
               } else {
                  element.classList.add("hide");
               }
            }
         });
      }

      const handleCheckboxChange = () => {
         if (checkbox) {
            setVisibility(checkbox.checked);
         }
      };

      checkbox?.addEventListener("change", handleCheckboxChange);

      const handleArStatus = (event) => {
         if (checkbox) {
            setVisibility(checkbox.checked && event.detail.status !== "session-started");
         }
      };

      modelViewer.addEventListener("ar-status", handleArStatus);

      // update svg
      function drawLine(svgLine, dotHotspot1, dotHotspot2, dimensionHotspot) {
         if (dotHotspot1 && dotHotspot2 && svgLine) {
            svgLine.setAttribute("x1", dotHotspot1.canvasPosition.x);
            svgLine.setAttribute("y1", dotHotspot1.canvasPosition.y);
            svgLine.setAttribute("x2", dotHotspot2.canvasPosition.x);
            svgLine.setAttribute("y2", dotHotspot2.canvasPosition.y);

            if (dimensionHotspot && !dimensionHotspot.facingCamera) {
               svgLine.classList.add("hide");
            } else {
               svgLine.classList.remove("hide");
            }
         }
      }

      const renderSVG = () => {
         const dimLines = modelViewer.querySelectorAll("line");
         if (!dimLines.length) return;

         // Draw X dimension lines (width) - top and bottom
         drawLine(
            dimLines[0],
            modelViewer.queryHotspot("hotspot-dot-X+Z"),
            modelViewer.queryHotspot("hotspot-dot+X+Z"),
            modelViewer.queryHotspot("hotspot-dim+X-top"),
         );
         drawLine(
            dimLines[1],
            modelViewer.queryHotspot("hotspot-dot-X-Z"),
            modelViewer.queryHotspot("hotspot-dot+X-Z"),
            modelViewer.queryHotspot("hotspot-dim+X-bottom"),
         );

         // Draw Z dimension lines (length) - left and right
         drawLine(
            dimLines[2],
            modelViewer.queryHotspot("hotspot-dot+X-Z"),
            modelViewer.queryHotspot("hotspot-dot+X+Z"),
            modelViewer.queryHotspot("hotspot-dim+Z-right"),
         );
         drawLine(
            dimLines[3],
            modelViewer.queryHotspot("hotspot-dot-X-Z"),
            modelViewer.queryHotspot("hotspot-dot-X+Z"),
            modelViewer.queryHotspot("hotspot-dim+Z-left"),
         );
      };

      const handleLoad = () => {
         const center = modelViewer.getBoundingBoxCenter();
         const size = modelViewer.getDimensions();
         const x2 = size.x / 2;
         const z2 = size.z / 2;

         // Create hotspots for the 4 corners of the tile (on the flat surface)
         modelViewer.updateHotspot({
            name: "hotspot-dot+X+Z",
            position: `${center.x + x2} ${center.y} ${center.z + z2}`,
         });

         modelViewer.updateHotspot({
            name: "hotspot-dot-X+Z",
            position: `${center.x - x2} ${center.y} ${center.z + z2}`,
         });

         modelViewer.updateHotspot({
            name: "hotspot-dot+X-Z",
            position: `${center.x + x2} ${center.y} ${center.z - z2}`,
         });

         modelViewer.updateHotspot({
            name: "hotspot-dot-X-Z",
            position: `${center.x - x2} ${center.y} ${center.z - z2}`,
         });

         // Width labels (X dimension) - top and bottom
         modelViewer.updateHotspot({
            name: "hotspot-dim+X-top",
            position: `${center.x} ${center.y} ${center.z + z2 * 1.12}`,
         });
         const xTopButton = modelViewer.querySelector('button[slot="hotspot-dim+X-top"]');
         if (xTopButton) {
            xTopButton.textContent = `${(size.x * 100).toFixed(0)} cm`;
         }

         modelViewer.updateHotspot({
            name: "hotspot-dim+X-bottom",
            position: `${center.x} ${center.y} ${center.z - z2 * 1.12}`,
         });
         const xBottomButton = modelViewer.querySelector(
            'button[slot="hotspot-dim+X-bottom"]',
         );
         if (xBottomButton) {
            xBottomButton.textContent = `${(size.x * 100).toFixed(0)} cm`;
         }

         // Length labels (Z dimension) - left and right
         modelViewer.updateHotspot({
            name: "hotspot-dim+Z-right",
            position: `${center.x + x2 * 1.2} ${center.y} ${center.z}`,
         });
         const zRightButton = modelViewer.querySelector(
            'button[slot="hotspot-dim+Z-right"]',
         );
         if (zRightButton) {
            zRightButton.textContent = `${(size.z * 100).toFixed(0)} cm`;
         }

         modelViewer.updateHotspot({
            name: "hotspot-dim+Z-left",
            position: `${center.x - x2 * 1.2} ${center.y} ${center.z}`,
         });
         const zLeftButton = modelViewer.querySelector(
            'button[slot="hotspot-dim+Z-left"]',
         );
         if (zLeftButton) {
            zLeftButton.textContent = `${(size.z * 100).toFixed(0)} cm`;
         }

         renderSVG();
      };

      modelViewer.addEventListener("load", handleLoad);
      modelViewer.addEventListener("camera-change", renderSVG);

      // Cleanup
      return () => {
         srcSelect?.removeEventListener("input", handleSrcChange);
         checkbox?.removeEventListener("change", handleCheckboxChange);
         modelViewer.removeEventListener("ar-status", handleArStatus);
         modelViewer.removeEventListener("load", handleLoad);
         modelViewer.removeEventListener("camera-change", renderSVG);
      };
   }, []);

   return (
      <div className="container">
         <model-viewer
            ref={modelViewerRef}
            src={baldosa1}
            ios-src={baldosa1USDZ}
            skybox-image={skybox}
            skybox-height="6m"
            alt="Model 3D de baldosa"
            id="model-viewer"
            ar
            ar-scale="fixed"
            ar-modes="webxr scene-viewer quick-look"
            xr-environment
            camera-controls
            camera-orbit="-30deg 65deg 20m"
            max-camera-orbit="auto 80deg 40m"
            shadow-intensity="1"
            touch-action="pan-y"
         >
            <button className="back-btn" onClick={() => navigate("/")}>
               ❮❮
            </button>
            <button slot="ar-button" id="ar-button">
               <img src={icon} alt="" />
               Visualizalo
            </button>

            <div id="ar-prompt">
               <img src={hand} alt="AR prompt" />
            </div>

            <button id="ar-failure">AR is not tracking!</button>

            <button
               slot="hotspot-dot+X+Z"
               className="dot"
               data-position="1 0 1"
               data-normal="0 1 0"
            ></button>
            <button
               slot="hotspot-dot-X+Z"
               className="dot"
               data-position="-1 0 1"
               data-normal="0 1 0"
            ></button>
            <button
               slot="hotspot-dot+X-Z"
               className="dot"
               data-position="1 0 -1"
               data-normal="0 1 0"
            ></button>
            <button
               slot="hotspot-dot-X-Z"
               className="dot"
               data-position="-1 0 -1"
               data-normal="0 1 0"
            ></button>

            <button
               slot="hotspot-dim+X-top"
               className="dim"
               data-position="0 0 1.2"
               data-normal="0 0 1"
            ></button>
            <button
               slot="hotspot-dim+X-bottom"
               className="dim"
               data-position="0 0 -1.2"
               data-normal="0 0 -1"
            ></button>
            <button
               slot="hotspot-dim+Z-right"
               className="dim"
               data-position="1.2 0 0"
               data-normal="1 0 0"
            ></button>
            <button
               slot="hotspot-dim+Z-left"
               className="dim"
               data-position="-1.2 0 0"
               data-normal="-1 0 0"
            ></button>

            <svg
               id="dimLines"
               width="100%"
               height="100%"
               xmlns="http://www.w3.org/2000/svg"
               className="dimensionLineContainer"
            >
               <line className="dimensionLine"></line>
               <line className="dimensionLine"></line>
               <line className="dimensionLine"></line>
               <line className="dimensionLine"></line>
            </svg>

            <div id="controls" className="glass">
               <label htmlFor="src">Product:</label>
               <select id="src">
                  <option value={baldosa1} data-ios-src={baldosa1USDZ}>
                     baldosa 1
                  </option>
                  <option value={baldosa2} data-ios-src={baldosa2USDZ}>
                     baldosa 2
                  </option>
               </select>

               <div>
                  <label htmlFor="show-dimensions">Show Dimensions:</label>
                  <input id="show-dimensions" type="checkbox" defaultChecked />
               </div>
            </div>
         </model-viewer>
      </div>
   );
};
