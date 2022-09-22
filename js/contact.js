const form = document.querySelector(".form");
const fullName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  if (fullName.value.trim() === "" || fullName.value.trim() == null) {
    setError(fullName, "Name is required.");
  } else {
    setSuccess(fullName);
  }

  if (subject.value.trim().length <= 10) {
    setError(subject, "Subject must be minimum 10 character long.");
  } else {
    setSuccess(subject);
  }

  if (address.value.trim().length <= 25) {
    setError(address, "Address must be minimum 25 character long.");
  } else {
    setSuccess(address);
  }

  if (email.value.trim() === "") {
    setError(email, "Email is required.");
  } else if (!checkEmail(email.value)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const formError = formControl.querySelector(".form-error");
  formControl.className = "form-control error";
  formError.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
