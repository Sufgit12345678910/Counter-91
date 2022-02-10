var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(91);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-91);
});

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}