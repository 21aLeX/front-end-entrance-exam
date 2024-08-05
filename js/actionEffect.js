const actionEffect = (element) => {
  const action = (e) => {
    
      const button = e.currentTarget;

      // Создаем элемент волны
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      // Получаем позицию клика относительно кнопки
      const rect = button.getBoundingClientRect();
      const rippleX = e.clientX - rect.left;
      const rippleY = e.clientY - rect.top;

      // Устанавливаем позицию и размеры волны
      ripple.style.left = `${rippleX}px`;
      ripple.style.top = `${rippleY}px`;
      ripple.style.width = ripple.style.height = `${Math.max(
        button.clientWidth,
        button.clientHeight
      )}px`;

      // Добавляем волну в кнопку
      button.appendChild(ripple);

      // Удаляем волну после завершения анимации
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
  };
  element.addEventListener("click", action);
};
export default actionEffect;
