//Contact Form Javascript File
let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  alert("Form has been submitted successfully.");

  let userName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  console.log(form);
  console.log("=================Form Submission==============");
  console.log("Name:", userName);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
}
