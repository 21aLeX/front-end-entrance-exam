const editText = (element) => {
  const editTextElem = (event) => {
    const element = event.target;
    if (element.dataset.edit) {
      // element.addEventListener(
        // "click",
        // (() => {
          event.stopPropagation();
          element.setAttribute("contenteditable", "true");
          element.focus();
        // })()
      // );

      element.addEventListener("blur", () => {
    console.log(element.id);
        element.setAttribute("contenteditable", "false");
        sessionStorage.setItem(`${element.id}`, element.textContent);
      });
    }
  };
  element.addEventListener("click", editTextElem);
};
export default editText;
