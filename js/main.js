import "../css/style.css";
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

const app = document.querySelector("#app");

// добавляем компоненты на страницу
const ProfileImgComponent = ProfileImg();
const NameBoxComponent = NameBox();
const LanguageComponent = Languages();
const EducationBoxComponent = EducationBox();
const ExtraBoxComponent = ExtraBox();
const ToolsBoxComponent = ToolsBox();
const ExperienceBoxComponent = ExperienceBox();

app.appendChild(ProfileImgComponent);
app.appendChild(NameBoxComponent);
app.appendChild(LanguageComponent);
app.appendChild(EducationBoxComponent);
app.appendChild(ExtraBoxComponent);
app.appendChild(ToolsBoxComponent);
app.appendChild(ExperienceBoxComponent);

// кнопка для скачивания
const buttonDownload = document.createElement("button");
buttonDownload.setAttribute("id", "buttonDownload");
buttonDownload.textContent = "Скачать";
buttonDownload.addEventListener("click", () => {
  buttonDownload.style.display = "none";
  // снимок
  html2canvas(app).then((canvas) => {
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
app.appendChild(buttonDownload);

editText(app);
