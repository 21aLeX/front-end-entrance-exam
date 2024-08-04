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

const ContactBox = () => {
  const contactBox = document.createElement("div");
  contactBox.setAttribute("id", "contactBox");
  // заголовок контактов
  const title = Title('contact',
    "Let´s chat! I´m ready to work on excinting projects",
    "white"
  );
  // контейнер контактов
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contactContainer");
  // емаил
  const email = document.createElement("div");
  email.setAttribute("id", "email");
  email.setAttribute("data-edit", true);
  email.textContent = sessionStorage.getItem("email") ?? "ivann19bj@gmail.com";
  // разделитель
  const delimeter = document.createElement("div");
  delimeter.setAttribute("id", "delimeter");
  delimeter.setAttribute("data-edit", true);
  delimeter.textContent = sessionStorage.getItem("delimeter") ?? "|";
  // телефон
  const phone = document.createElement("div");
  phone.setAttribute("id", "phone");
  phone.setAttribute("data-edit", true);
  phone.textContent = sessionStorage.getItem("phone") ?? "+34 666 666 666";

  contactContainer.appendChild(email);
  contactContainer.appendChild(delimeter);
  contactContainer.appendChild(phone);
  contactBox.appendChild(title);
  contactBox.appendChild(contactContainer);
  contactBox.appendChild(contactContainer);
  return contactBox;
};
export default ContactBox;
