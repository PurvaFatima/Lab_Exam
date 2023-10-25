// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get form input values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  // Display the submitted information in the console
  console.log("Submitted Information:");
  console.log("Full Name: " + fullName);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Address: " + address);
}

// Add an event listener to the form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", handleSubmit);
