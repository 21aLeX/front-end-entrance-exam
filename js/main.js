import "../css/style.css";
import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import ProfileImg from "./components/profileImg/ProfileImg.js";
import NameBox from "./components/nameBox/NameBox.js";
import editText from "./editText.js";
import Languages from "./components/languages/Languages.js";
import EducationBox from "./components/educationBox/EducationBox.js";
import ExtraBox from "./components/extraBox/ExtraBox.js";
import ToolsBox from "./components/toolsBox/ToolsBox.js";
import ExperienceBox from "./components/experienceBox/ExperienceBox.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

// кнопка для скачивания
const buttonDownload = document.createElement("button");
buttonDownload.setAttribute("id", "buttonDownload");
buttonDownload.textContent = "Скачать";
buttonDownload.addEventListener("click", () => {
  buttonDownload.style.display = "none";
  // снимок
  html2canvas(fragment).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }
    // скачиваем файл
    pdf.save("example.pdf");
    buttonDownload.style.display = "block";
  });
});
fragment.appendChild(buttonDownload);

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
