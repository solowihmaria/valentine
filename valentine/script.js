let currentPage = 0;
const pages = document.querySelectorAll(".page");
const finalPage = document.getElementById("final-page");
const card = document.getElementById("card");
const front = document.getElementById("front");

front.addEventListener("click", () => {
  if (currentPage < pages.length) {
    pages[currentPage].style.display = "block";
    if (currentPage > 0) pages[currentPage - 1].style.display = "none";
    currentPage++;
  } else {
    finalPage.style.display = "block";
    pages[currentPage - 1].style.display = "none";
  }
});

finalPage.addEventListener("click", () => {
  location.reload();
});
