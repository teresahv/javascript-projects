let count = 0;
const number = document.getElementById("number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", (x) => {
      const styles = x.currentTarget.classList;
      (styles.contains("decrease")) ? count--
        : (styles.contains("increase")) ? count++
          : count = 0;

      (count > 0) ? number.style.color = "#49E3AB"
        : (count < 0) ? number.style.color = "#9E91F9"
          : number.style.color = "#EE9A86";

      number.textContent = count;
    });
});