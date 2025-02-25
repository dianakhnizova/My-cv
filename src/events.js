const start = () => {
  document.querySelector(".button-start")
    .addEventListener("click", () => {
      console.log("click");
      window.location.href = "../../home/home.html";
    });
};

const openProject = () => {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function () {
      const url = this.dataset.url;
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
};

export { start, openProject };
