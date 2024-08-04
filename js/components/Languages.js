import Title from "./title/Title";

const dataLanguages = {
  English: 184,
  Spanish: 144,
  French: 123,
};

const Languages = () => {
  const languages = document.createElement("div");
  languages.setAttribute("id", "languages");
  // заголовок
  const title = Title("Languages");
  // Список языков
  const listLanguages = document.createElement("div");
  listLanguages.setAttribute("id", "listLanguages");
  // Список имен языков
  const listNameLanguages = document.createElement("div");
  listNameLanguages.setAttribute("id", "listNameLanguages");
  // Уровни языков
  const listLevelLanguages = document.createElement("div");
  listLevelLanguages.setAttribute("id", "listLevelLanguages");
  //создание названий и уровней языков
  Object.entries(dataLanguages).map(([key, value]) => {
    // название
    const newNameLanguage = document.createElement("div");
    newNameLanguage.setAttribute("id", key);
    newNameLanguage.setAttribute("data-edit", true);
    newNameLanguage.textContent = sessionStorage.getItem(key) ?? key;
    // уровень
    const newLevelLanguage = document.createElement("div");
    newLevelLanguage.setAttribute("id", "newLevelLanguage");
    newLevelLanguage.style.cssText = `width:${value}px`;
    // добавлениев контейнеры
    listNameLanguages.appendChild(newNameLanguage);
    listLevelLanguages.appendChild(newLevelLanguage);
  });

  listLanguages.appendChild(listNameLanguages);
  listLanguages.appendChild(listLevelLanguages);
  languages.appendChild(title);
  languages.appendChild(listLanguages);

  return languages;
};
export default Languages;
