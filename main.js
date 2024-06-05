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

// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var message = document.getElementById("message").value;

//     console.log("Sending email...");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Phone:", phone);
//     console.log("Message:", message);

//     Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "pritamsharma7844@gmail.com",
//       Password: "D88FAA994CCDFC089AE21E2C31A0288F418E",
//       To: "pritamsharma7844@gmail.com",
//       From: "pritamsharma7844@gmail.com", // Ensure this matches the authenticated user
//       Subject: "New Contact Form Submission",
//       Body: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}`,
//     })
//       .then((message) => {
//         console.log("Email sent successfully:", message);
//         alert("Email sent successfully");
//       })
//       .catch((error) => {
//         console.error("Failed to send email:", error);
//         alert("Failed to send email: " + error);
//       });
//   });
