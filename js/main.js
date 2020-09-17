/* Sidebar open and close */

document.getElementById("hamburger-menu").addEventListener("click", () => {
  document.getElementById("sidebar").style.width = "25em";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("sidebar").style.width = "0em";
});

/* Solutions page open and close boxs */

const boxs = document.querySelectorAll(".text-wrp");

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", function () {
    boxs[i].classList.toggle("active-box");
  });
}

/* Subscribe Form */

document.getElementById("subscribe-btn-1").addEventListener("click", () => {
  document.querySelector(".subscribe-form").style.display = "flex";
});

document.getElementById("subscribe-btn-2").addEventListener("click", () => {
  document.querySelector(".subscribe-form").style.display = "none";
});
