console.log("Hello I am here");

// changing navbar style of navbar

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

// show/hide faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show hide nav menu?
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});

// contact form logic
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Ibx4PEbTzRPsGd3nT"); // Replace with your Email.js user ID
});

function sendEmail(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var messageInput = document.getElementById("message");

  var isValid = validateForm();
  if (!isValid) {
    return false;
  }

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  console.log(params); // Debugging - check the form values


  emailjs.send("service_mri66rw", "template_he2igld", params)
    .then(function(response) {
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
      alert("Error sending email: " + error);
    });
}

function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var messageInput = document.getElementById("message");
  var isValid = true;

  // Reset error messages and borders
  document.querySelectorAll(".error-message").forEach(function (span) {
    span.innerHTML = "";
  });
  document.querySelectorAll(".form_group input, .form_group textarea").forEach(function (input) {
    input.classList.remove("invalid");
  });

  // Name validation
  if (nameInput.value.trim() === "") {
    document.getElementById("name-error").innerHTML = "Name is required";
    nameInput.classList.add("invalid");
    isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    document.getElementById("email-error").innerHTML = "Email is required";
    emailInput.classList.add("invalid");
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    document.getElementById("email-error").innerHTML = "Invalid email format";
    emailInput.classList.add("invalid");
    isValid = false;
  }

  // Phone validation
  if (phoneInput.value.trim() === "") {
    document.getElementById("phone-error").innerHTML = "Phone number is required";
    phoneInput.classList.add("invalid");
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    document.getElementById("message-error").innerHTML = "Message is required";
    messageInput.classList.add("invalid");
    isValid = false;
  }

  return isValid;
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}


// for pop up container

function showPopup() {
  var popup = document.getElementById("popupContainer");
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 3000); // Adjust the time (in milliseconds) the popup should be displayed
}

function closePopup() {
  var popup = document.getElementById("popupContainer");
  popup.style.display = "none";
}
