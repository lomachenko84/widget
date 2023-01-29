let input = document.querySelector('.input')
function removeActiv() {
   let imgs = document.querySelectorAll(".img")
   for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("activ")
   }
}
export function cardTip(n) {
   let number = n.slice(0, 3)

   if (number[0] === "4") {
      return "1"
   }
   if (number[0] === "5") {
      return "2"

   }
   if (number === "371") {
      return "3"
   }
   if (number[0] === "6") {
      return "4"
   }
   if (number === "353") {
      return "5"
   }
   if (number === "305") {
      return "6"
   }
   if (number[0] === "2") {
      return "7"
   }
   return "0"

}

window.onload = function () {
   input.addEventListener("input", function () {
      removeActiv();
      document.getElementById(cardTip(input.value)).classList.add("activ")

   })
}
export function isValid(cardNumber) {
   var arr = [],
      card_number = cardNumber.toString();
   for (var i = 0; i < card_number.length; i++) {
      if (i % 2 === 0) {
         var m = parseInt(card_number[i]) * 2;
         if (m > 9) {
            arr.push(m - 9);
         } else {
            arr.push(m);
         }
      } else {
         var n = parseInt(card_number[i]);
         arr.push(n)
      }
   }
   var summ = arr.reduce(function (a, b) { return a + b; });
   return Boolean(!(summ % 10));

}

window.onload = function () {
   let button = document.querySelector(".button")
   button.addEventListener("click", function () {
      let e = isValid(input.value)
      if (e) {
         alert("Ваша карта валидна")
      } else {
         alert("Ваша карта не валидна")
      }
   })
}