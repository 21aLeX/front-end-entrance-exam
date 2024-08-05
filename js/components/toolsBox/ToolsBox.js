import Title from "../title/Title";
import "./style.css";
const dataImg = {
  desing: [
    "/desingImg/logoFigma.png",
    "/desingImg/logoCreativeCloud.png",
    "/desingImg/logoMiro 1.png",
    "/desingImg/logoNotion.png",
    "/desingImg/logoMeet.png",
    "/desingImg/logoanalytics.png",
  ],
  "no-code": [
    "/noCodeImg/logoZapìer 1.png",
    "/noCodeImg/logoWebflow.png",
    "/noCodeImg/logoFramer.png",
    "/noCodeImg/logoWordpress.png",
  ],
  "artoficial intelligence": [
    "/artoficialImg/logoChatGPT 1.png",
    "/artoficialImg/logoCopilot 1.png",
    "/artoficialImg/logoMidjourney 1.png",
  ],
};
const ToolsBox = () => {
  const toolsBox = document.createElement("div");
  toolsBox.setAttribute("id", "toolsBox");
  // заголовок инструментов
  const title = Title("Tools");
  // контейнер инструментов
  const toolsContainer = document.createElement("div");
  toolsContainer.setAttribute("id", "toolsContainer");

  Object.entries(dataImg).forEach(([key, arrSrc]) => {
    // контент инструментов
    const contentTools = document.createElement("div");
    contentTools.setAttribute("id", "contentTools");
    // название инструментов
    const nameTools = document.createElement("div");
    nameTools.setAttribute("id", `nameTools${key}`);
    nameTools.classList.add("nameTools");
      nameTools.setAttribute("data-edit", true);
      nameTools.textContent = sessionStorage.getItem(`nameTools${key}`) ?? key;
    contentTools.appendChild(nameTools);
    arrSrc.forEach((src) => {
      //  инструмент
      const tools = document.createElement("img");
      tools.setAttribute("id", "tools");
      tools.setAttribute("src", src);
      contentTools.appendChild(tools);
    });
    toolsContainer.appendChild(contentTools);
  });
  //   // разделитель
  //   const delimeter = document.createElement("div");
  //   delimeter.setAttribute("id", "delimeter");
  //   delimeter.setAttribute("data-edit", true);
  //   delimeter.textContent = sessionStorage.getItem("delimeter") ?? "|";
  //   // разделитель
  //   const phone = document.createElement("div");
  //   phone.setAttribute("id", "phone");
  //   phone.setAttribute("data-edit", true);
  //   phone.textContent = sessionStorage.getItem("phone") ?? "+34 666 666 666";

  //   contactContainer.appendChild(email);
  //   contactContainer.appendChild(delimeter);
  //   contactContainer.appendChild(phone);
  toolsBox.appendChild(title);
  toolsBox.appendChild(toolsContainer);
  //   contactBox.appendChild(contactContainer);
  //   contactBox.appendChild(contactContainer);
  return toolsBox;
};
export default ToolsBox;
