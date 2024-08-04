const ProfileImg = () => {
  const img = document.createElement("div");
  img.style.backgroundImage = `url(/profileImg.png)`;
  img.setAttribute("id", "profileImg");
  return img;
};
export default ProfileImg;
