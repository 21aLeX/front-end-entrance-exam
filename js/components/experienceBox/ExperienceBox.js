import actionEffect from "../../actionEffect";
import Title from "../title/Title";
import "./style.css";

const dataExperience = [
  {
    date: "Jul. 2023 - Ago. 2023",
    role: "Senior Graphic Designer",
    company: "Pinnacle",
    time: "Full-time",
    points: [
      "Research and brainstorm various design ideas for content and marketing.",
      "Review the work submitted by Junior Designers and sharing feedback.",
    ],
  },
  {
    date: "Ene. 2021 - Jul. 2023",
    role: "Graphic / Web designer",
    company: "Double Square",
    time: "Full-time",
    points: [
      "Development of internal projects from scratch, product design of brands.",
      "Landing page, webapps and hybrid apps",
      "Taking decisions with stakeholders for the future of products such as Beagle labs, myur...",
    ],
  },
  {
    date: "Feb. 2021 - Jul. 2023",
    role: "Graphic Designer",
    company: "Freelance",
    points: [
      "Visual design for Events, Brands and Products.",
      "Product design, Packaging Design",
      "Logo Design",
    ],
  },
];
const ExperienceBox = () => {
  const experienceBox = document.createElement("div");
  experienceBox.setAttribute("id", "experienceBox");
  // заголовок опыта
  const title = Title("Experience");
  // список работ
  const listJob = document.createElement("div");
  listJob.setAttribute("id", "listJob");
  // работа
  dataExperience.forEach(({ date, role, company, time, points }, index) => {
    // контент работы
    const contentJob = document.createElement("div");
    contentJob.setAttribute("id", "contentJob");
    // контейнер заголовка работы
    const containerTitleJob = document.createElement("div");
    containerTitleJob.setAttribute("id", "containerTitleJob");
    // заголовка работы
    const titleJob = document.createElement("div");
    titleJob.setAttribute("id", `titleJob${date}`);
    titleJob.classList.add("titleJob");
    titleJob.setAttribute("data-edit", true);
    actionEffect(titleJob);
    titleJob.textContent = sessionStorage.getItem(`titleJob${date}`) ?? date;
    containerTitleJob.appendChild(titleJob);
    if (index === 0) {
      contentJob.setAttribute("data-last", true);
      // тег последней работы
      const tagLast = document.createElement("div");
      tagLast.setAttribute("id", "tagLast");
      tagLast.setAttribute("data-edit", true);
      actionEffect(tagLast);
      tagLast.textContent = sessionStorage.getItem(`tagLast`) ?? "most recent";
      containerTitleJob.appendChild(tagLast);
    }
    // контейнер всей информации
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("id", "containerInfo");
    // контейнер роль/компания
    const jobInfo = document.createElement("div");
    jobInfo.setAttribute("id", "jobInfo");
    // роль
    const roles = document.createElement("div");
    roles.setAttribute("id", `${role}Role`);
    roles.classList.add("roleJob");
    roles.setAttribute("data-edit", true);
    actionEffect(roles);
    roles.textContent = sessionStorage.getItem(`${role}Role`) ?? role;
    // о компании
    const aboutJob = document.createElement("div");
    aboutJob.setAttribute("id", "aboutJob");
    // компания
    const companys = document.createElement("div");
    companys.setAttribute("id", `${company}Company`);
    companys.classList.add("company");
    companys.setAttribute("data-edit", true);
    actionEffect(companys);
    companys.textContent =
      sessionStorage.getItem(`${company}Company`) ?? company;
    aboutJob.appendChild(companys);
    if (time) {
      // разделитель
      const delimeter = document.createElement("div");
      delimeter.setAttribute("id", "companyDelimeter");
      delimeter.classList.add("company");
      delimeter.setAttribute("data-edit", true);
      actionEffect(delimeter);
      delimeter.textContent = sessionStorage.getItem("companyDelimeter") ?? "|";
      // время
      const times = document.createElement("div");
      times.setAttribute("id", `${time}Time`);
      times.classList.add("company");
      times.setAttribute("data-edit", true);
      actionEffect(times);
      times.textContent = sessionStorage.getItem(`${time}Time`) ?? time;
      aboutJob.appendChild(delimeter);
      aboutJob.appendChild(times);
    }
    // контейнер точек
    const containerPoint = document.createElement("ul");
    containerPoint.setAttribute("id", "containerPoint");
    points.forEach((poin, index) => {
      //  точека
      const itemPoint = document.createElement("li");
      itemPoint.setAttribute("id", `${index}${company}Point`);
      itemPoint.setAttribute("data-edit", true);
      actionEffect(itemPoint);
      itemPoint.textContent =
        sessionStorage.getItem(`${index}${company}Point`) ?? poin;
      containerPoint.appendChild(itemPoint);
    });

    jobInfo.appendChild(roles);
    jobInfo.appendChild(aboutJob);
    containerInfo.appendChild(jobInfo);
    containerInfo.appendChild(containerPoint);
    contentJob.appendChild(containerTitleJob);
    contentJob.appendChild(containerInfo);
    listJob.appendChild(contentJob);
  });
  experienceBox.appendChild(title);
  experienceBox.appendChild(listJob);
  return experienceBox;
};
export default ExperienceBox;
