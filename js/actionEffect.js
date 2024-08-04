const actionEffect = (element) => {
  const action = (e) => {
    
        const ripple = document.createElement("span");
        ripple.className = "wave-effect";
        const size = Math.max(element.offsetWidth, element.offsetHeight) * 2;

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.top = "50%";
        ripple.style.left = "50%";
        ripple.style.transform = "translate(-50%, -50%)";

        element.appendChild(ripple);

        const rect = element.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        ripple.style.top = `${mouseY - size / 2}px`;
        ripple.style.left = `${mouseX - size / 2}px`;

        setTimeout(() => {
          ripple.remove();
        }, 500);
  };
  element.addEventListener("click", action);
};
export default actionEffect;
