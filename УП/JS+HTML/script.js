const button = document.querySelector("#btn");
const text = document.querySelector("#text");

button.addEventListener("click", function () {
  const input = document.querySelector("#input").value;
  text.innerHTML = `Добро пожаловать, ${input}!`;
  let name = input;
  alert(name);
});

//const btn_accept = document.querySelector("#accept");
//const btn_reject = document.querySelector("#reject");

//btn_accept.addEventListener("click", function () {
//  alert("Заявка принята. Спасибо!");
//});

//btn_reject.addEventListener("click", function () {
//  alert("Заявка отклонена. Сожалеем!");
//});
