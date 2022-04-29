const form = document.createElement("form");
const firstName = document.createElement("input");
firstName.placeholder = "First Name";
const lastName = document.createElement("input");
lastName.placeholder = "Last Name";
const email = document.createElement("input");
email.placeholder = "Email Address";
const password = document.createElement("input");
password.placeholder = "Password (min 8 char)";
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.classList.add("btn", "btn-primary", "d-flex", "submit");
form.appendChild(firstName);
form.appendChild(lastName);
form.appendChild(email);
form.appendChild(password);
form.appendChild(submitBtn);
form.classList.add("text-center");
document.body.appendChild(form);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email.value);
});
