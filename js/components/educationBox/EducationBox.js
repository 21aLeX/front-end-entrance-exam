import actionEffect from "../../actionEffect";
import Title from "../title/Title";
import "./style.css";

const dataEducations = [
  {
    age: "2024",
    name: "UX/UI",
    tags: [
      "#UX",
      "#UI",
      "#research",
      "#DesignSystem",
      "#Agile",
      "#wireframing",
      "#figma",
      "#IA",
    ],
    school: "Neoland",
  },
  {
    age: "2022",
    name: "Product designer",
    tags: ["#analytics", "#research", "#prototype", "#wireframes"],
    school: "Coursera",
  },
  {
    age: "2017-2021",
    name: "Graphic design",
    tags: ["#branding", "#web", "#illustration", "#adobe"],
    school: "Cali Institute of the Arts",
  },
];

const clickLike = (event) => {
  if (!event.target.hasAttribute("data-edit")) {
    const element = event.currentTarget;
    element.querySelector("#like").classList.toggle("dispNone");
    element.querySelector("#noLike").classList.toggle("dispNone");
    element.querySelector("#listTags").classList.toggle("greenFone");
    element.classList.toggle("greenFone");
  }
};
const EducationBox = () => {
  const educationBox = document.createElement("div");
  educationBox.setAttribute("id", "educationBox");
  // заголовок образований
  const title = Title("Education");
  educationBox.appendChild(title);
  // контейнер общий
  const containerEducations = document.createElement("div");
  containerEducations.setAttribute("id", `containerEducations`);

  dataEducations.map(({ age, name, tags, school }) => {
    // контейнер
    const education = document.createElement("div");
    education.setAttribute("id", `education${age}`);
    education.classList.add("education");
    education.addEventListener("click", clickLike);
    actionEffect(education);
    // контейнер заголовка
    const topBar = document.createElement("div");
    topBar.setAttribute("id", "topBar");
    // год
    const date = document.createElement("div");
    date.setAttribute("id", age);
    date.setAttribute("data-edit", true);
    actionEffect(date);
    date.textContent = sessionStorage.getItem(age) ?? age;
    // лайк
    const like = document.createElement("div");
    like.style.backgroundImage = `url(/like.png)`;
    like.setAttribute("id", "like");
    like.classList.add("dispNone", "like");
    const noLike = document.createElement("div");
    noLike.style.backgroundImage = `url(/noLike.png)`;
    noLike.setAttribute("id", "noLike");
    noLike.classList.add("like");
    // контейнер контента
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    // название
    const newName = document.createElement("div");
    newName.setAttribute("id", name);
    newName.setAttribute("data-edit", true);
    actionEffect(newName);
    newName.textContent = sessionStorage.getItem(name) ?? name;
    // список тегов
    const listTags = document.createElement("div");
    listTags.setAttribute("id", "listTags");
    listTags.classList.add("greenText");
    // теги
    tags.forEach((t) => {
      const tag = document.createElement("div");
      tag.setAttribute("id", t);
      tag.setAttribute("data-edit", true);
      actionEffect(tag);
      tag.textContent = sessionStorage.getItem(t) ?? t;
      listTags.appendChild(tag);
    });
    // название школы
    const nameSchool = document.createElement("div");
    nameSchool.setAttribute("id", school);
    nameSchool.setAttribute("data-edit", true);
    nameSchool.classList.add("school");
    nameSchool.textContent = sessionStorage.getItem(school) ?? school;
    actionEffect(nameSchool);

    topBar.appendChild(date);
    topBar.appendChild(like);
    topBar.appendChild(noLike);
    content.appendChild(newName);
    content.appendChild(listTags);
    education.appendChild(topBar);
    education.appendChild(content);
    education.appendChild(nameSchool);
    containerEducations.appendChild(education);
  });

  educationBox.appendChild(containerEducations);
  return educationBox;
};
export default EducationBox;
