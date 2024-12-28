// This script will fetch and load the header and footer into each page

// Function to load the header and footer
function loadHeaderAndFooter() {
    // Fetch and insert the header into the page
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Fetch and insert the footer into the page
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the function to load header and footer on page load
window.onload = loadHeaderAndFooter;

// Additional functionalities can go here, like form validation, event handling, etc.




# optional to enable smooth scrolling to the navigation links    

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (const link of navLinks) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            /*targetElement.scrollIntoView({ behavior: 'smooth' });*/
        });
    }
});
