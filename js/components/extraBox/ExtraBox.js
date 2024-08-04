import ContactBox from "../contactBox/ContactBox";
import Title from "../title/Title";
import "./style.css";

const dataInterests = [
  "branding",
  "brand identity",
  "logo",
  "typography",
  "photography",
  "designing",
  "poster design",
  "research",
  "social networks",
  "illustration",
];

const ExtraBox = () => {
  const extraBox = document.createElement("div");
  extraBox.setAttribute("id", "extraBox");
  // блок интересов
  const interestsBlock = document.createElement("div");
  interestsBlock.setAttribute("id", "interestsBlock");
  // заголовок интересов
  const title = Title("Interests");
  // контейнер интересов
  const interestsBox = document.createElement("div");
  interestsBox.setAttribute("id", "interestsBox");
  // интересы
  dataInterests.forEach((interest) => {
    const newInterest = document.createElement("div");
    newInterest.setAttribute("id", interest);
    newInterest.classList.add("interest");
    newInterest.setAttribute("data-edit", true);
    newInterest.textContent = sessionStorage.getItem(interest) ?? interest;
    interestsBox.appendChild(newInterest);
  });

  const contactBox = ContactBox();
  interestsBlock.appendChild(title);
  interestsBlock.appendChild(interestsBox);
  extraBox.appendChild(interestsBlock);
  extraBox.appendChild(contactBox);
  return extraBox;
};
export default ExtraBox;
