export const start = () => {
  const startButton = document
    .querySelector(".button-start")
    .addEventListener("click", () => {
      console.log("click");
      window.location.href = "../../home/home.html";
    });
};
