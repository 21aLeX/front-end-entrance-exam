import actionEffect from "../../actionEffect";
import "./style.css";

const Title = (name, text, color) => {
  // заголовок
  const title = document.createElement("div");
  title.setAttribute("id", `title${name}`);
  title.classList.add("title");
    actionEffect(title);
  title.setAttribute("data-edit", true);
  title.textContent = sessionStorage.getItem(`title${name}`) ?? text ?? name;
  if (color) {
    title.classList.toggle(`${color}Title`);
  }
  return title;
};
export default Title;
