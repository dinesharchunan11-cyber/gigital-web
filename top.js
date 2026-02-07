document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const webBody = document.querySelector(".web-body");

  if (!backToTop || !webBody) {
    console.log("BackToTop or webBody not found");
    return;
  }

  const webBodyTop = webBody.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= webBodyTop - 50) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
});

