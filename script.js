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
    alert("Thank you for contacting us!"); // Show alert message
    document.querySelector("#contact-form").reset(); // Reset the form fields
});



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY; // Get the current scroll position
    const maxScroll = 300; // Define how far the user should scroll before the opacity changes

    // Calculate the opacity based on scroll position
    const opacity = Math.max(0.5, 1 - (scrollPosition / maxScroll));
    
    // Set the opacity of the header
    header.style.opacity = opacity;
});