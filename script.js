function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Toggle Collapsible Sections
document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            collapsible.classList.toggle("active");
            const content = collapsible.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});


document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for contacting us! We'll get back to you soon"); // Show alert message
    document.querySelector("#contact-form").reset(); // Reset the form fields
});



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY; 
    const maxScroll = 300; 
    const opacity = Math.max(0.5, 1 - (scrollPosition / maxScroll));
    
    header.style.opacity = opacity;
});
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    // Display confirmation popup
    const confirmationPopup = document.getElementById("confirmationPopup");
    confirmationPopup.classList.remove("hidden");

    // Optionally, you can log the booking details to the console
    console.log(`Booking Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nGuests: ${guests}`);
});

// Close the confirmation popup when the close button is clicked
document.getElementById("closePopup").addEventListener("click", function() {
    const confirmationPopup = document.getElementById("confirmationPopup");
    confirmationPopup.classList.add("hidden");

    // Optionally, reset the form
    document.getElementById("bookingForm").reset();
});
// Show the popup when the button is clicked
function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  // Close the popup when the close button is clicked
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  