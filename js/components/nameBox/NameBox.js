import actionEffect from "../../actionEffect";
import "./style.css";

const NameBox = () => {
  const nameBox = document.createElement("div");
  nameBox.setAttribute("id", "nameBox");
  // текст приветствия
  const textHello = document.createElement("div");
  textHello.setAttribute("id", "textHello");
  textHello.setAttribute("data-edit", true);
  actionEffect(textHello);
  textHello.textContent = sessionStorage.getItem("textHello") ?? "Hello 👋🏻 I’m";
  // Имя
  const name = document.createElement("div");
  name.setAttribute("id", "name");
  name.setAttribute("data-edit", true);
  actionEffect(name);
  name.textContent = sessionStorage.getItem("name") ?? "Graham Hunt";
  // роль
  const role = document.createElement("div");
  role.setAttribute("id", "role");
  role.setAttribute("data-edit", true);
  actionEffect(role);
  role.textContent = sessionStorage.getItem("role") ?? "Brand/Logo Designer";
  // контейнер для имени и роли
  const yourInfo = document.createElement("div");
  yourInfo.setAttribute("id", "yourInfo");
  yourInfo.appendChild(name);
  yourInfo.appendChild(role);

  nameBox.appendChild(textHello);
  nameBox.appendChild(yourInfo);
  return nameBox;
};
export default NameBox;
