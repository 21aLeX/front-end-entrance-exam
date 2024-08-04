import "../css/style.css";
import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import ProfileImg from "./components/ProfileImg.js";
import NameBox from "./components/NameBox.js";
import editText from "./editText.js";
import Languages from "./components/Languages.js";
import EducationBox from "./components/educationBox/EducationBox.js";
import ExtraBox from "./components/extraBox/ExtraBox.js";
import ToolsBox from "./components/toolsBox/ToolsBox";
import ExperienceBox from "./components/experienceBox/ExperienceBox.js";

   import jsPDF from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js";

const fragment = document.querySelector("#app");
// .innerHTML = `
//   <div>

//   </div>
// `

const ProfileImgComponent = ProfileImg();
const NameBoxComponent = NameBox();
const LanguageComponent = Languages();
const EducationBoxComponent = EducationBox();
const ExtraBoxComponent = ExtraBox();
const ToolsBoxComponent = ToolsBox();
const ExperienceBoxComponent = ExperienceBox();

fragment.appendChild(ProfileImgComponent);
fragment.appendChild(NameBoxComponent);
fragment.appendChild(LanguageComponent);
fragment.appendChild(EducationBoxComponent);
fragment.appendChild(ExtraBoxComponent);
fragment.appendChild(ToolsBoxComponent);
fragment.appendChild(ExperienceBoxComponent);

const button = document.createElement("button");
button.textContent = "Печать";
var doc = new jsPDF();
button.addEventListener("click", () => {
//   var element = document.getElementById("content"); // Замените 'content' на id вашего HTML контейнера
  doc.html(fragment, {
    callback: function (doc) {
      doc.save("output.pdf"); // Сохраняем PDF файл с именем 'output.pdf'
    },
  });
});
fragment.appendChild(button);
// setupCounter(document.querySelector("#counter"));
editText(fragment);

// <a href="https://vitejs.dev" target="_blank">
//   <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
// <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//   <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// </a>
// <h1>Hello Vite!</h1>
// <div class="card">
//   <button id="counter" type="button"></button>
// </div>
// <p class="read-the-docs">
//   Click on the Vite logo to learn more
// </p>
