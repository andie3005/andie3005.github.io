# andie3005.github.io
Website attempt #n

##To do:  
- Create a folder named images and add photos.  
- Make sure to have thumbnail versions of photos with prefixes (photo1_thumb.jpg, photo2_thumb.jpg, etc.,) and original high-resolution versions with the prefix photo1.jpg, photo2.jpg, etc.  
- Add more photos by adding additional <a> tags inside the <div class="gallery"> section  
  
###Optional to enable smooth scrolling to the navigation links (script.js)    

`document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (const link of navLinks) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});`
