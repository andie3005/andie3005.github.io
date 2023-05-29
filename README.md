# andie3005.github.io
Website attempt #n

## To do:  
- Create a folder named images and add photos.  
- Make sure to have thumbnail versions of photos with prefixes (photo1_thumb.jpg, photo2_thumb.jpg, etc.,) and original high-resolution versions with the prefix photo1.jpg, photo2.jpg, etc.  
- Add more photos by adding additional <a> tags inside the `<div class="gallery">` section  
  - Prevent right-clicking and the context menu from appearing when users try to interact with the images to discourages casual users from saving or downloading the images by using the following html code:

```
<img src="path/to/your/image.jpg" alt="Description of the image" oncontextmenu="return false;">
```
  
The `oncontextmenu="return false;"` attribute prevents the context menu from opening when users right-click on the image.


### Optional to enable smooth scrolling to the navigation links (script.js)    
```
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (const link of navLinks) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
```
