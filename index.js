let btn = document.querySelector(".btn");
let code = document.querySelector(".code");

btn.onclick = function () {
  navigator.clipboard.writeText(code.innerHTML);
  btn.innerHTML = "COPIED";

  setTimeout(function () {
    btn.innerHTML = "COPY CODE";
  }, 3000);
};
