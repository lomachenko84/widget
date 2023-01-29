const form = document.querySelector(".form");

const errors = {
   header: {
      valueMissing: "Вот какой удивительный контент. Это очень увлекательно. Верно?"
   }
}
form.addEventListener('submit', (e) => {
   e.preventDefault();
})
if(form.checkValidity()){
   console.log('valid');
} else {
   console.log('invalid');
}

const elements = form.elements;
[...elements].some((el) => {
   if (!el.name) return;
   if (key === "valid") return;

   if (el.validity[key]) {
      console.log(key)
      console.log(errors[el.name][key]);
   }
})