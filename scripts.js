// EmailJS
emailjs.init("snUpxgoRQOXF3Bh97"); 

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_nm5myhc", "template_azj2zf5", this)
    .then(function () {
      alert("Appointment booked successfully! A confirmation has been sent to your email.");
      window.location.href = "index.html"; // Redirection after booking appointment
    }, function (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    });
});
