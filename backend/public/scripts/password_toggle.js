const password_input_field = document.getElementById("password_input_field");
const password_toggle_btn = document.getElementById("password_toggle_btn");
const password_eye = password_toggle_btn.querySelector("ion-icon");

const togglePassword = () => {
  const type =
    password_input_field.getAttribute("type") === "password"
      ? "text"
      : "password";
  password_input_field.setAttribute("type", type);

  if (type === "password") {
    password_eye.setAttribute("name", "eye-outline");
  } else if (type === "text") {
    password_eye.setAttribute("name", "eye-off-outline");
  }
};

password_toggle_btn.addEventListener("click", togglePassword);
