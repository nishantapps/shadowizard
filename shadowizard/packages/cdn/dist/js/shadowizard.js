function shadowizard(options) {

  // Get all HTML elements with the class 'shadowizard'
  let images = document.querySelectorAll('.shadowizard');
  
  // Set default values for options that are not specified
  options = {
    shadow_type: options.shadow_type || 'hard',
    padding: options.padding || false,
    border: options.border || false,
    border_radius: options.border_radius || false,
    width: options.width || null,
    height: options.height || null,
    background_color: options.background_color || null,
    gradient: options.gradient || false,
    gradient_direction: options.gradient_direction || 'to right',
    gradient_color: options.gradient_color || null,
    animation: options.animation || false
  }
  
  // Apply box-shadow effect to each HTML element with the class 'shadowizard' and customize based on options
  images.forEach(image => {
    // Set the box-shadow properties
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
    
    // Check if padding property is set to true, and add padding if so
    if (options.padding) {
      image.style.padding = '1em';
    }

    // Check if border property is set, and add border if so
    if (options.border) {
      image.style.border = '1px solid black';
    }

    // Check if border_radius property is set, and add border radius if so
    if (options.border_radius) {
      image.style.borderRadius = '50%';
    }

    // Check if width property is set, and set the width of the element if so
    if (options.width) {
      image.style.width = options.width;
    }

    // Check if height property is set, and set the height of the element if so
    if (options.height) {
      image.style.height = options.height;
    }

    // Check if background_color property is set, and set the background color of the element if so
    if (options.background_color) {
      // If gradient property is also set, create a linear gradient background
      if (options.gradient && options.gradient_color) {
        image.style.background = `linear-gradient(${options.gradient_direction}, ${options.background_color}, ${options.gradient_color})`;
      } else { // Otherwise, set a solid background color
        image.style.backgroundColor = options.background_color;
      }
    }

    // Check if animation property is set, and add animation if so
    if (options.animation) {
      // Add a transition effect to smooth out the animation
      image.style.transition = 'all 0.5s ease-in-out';
      
      // Add a mouseover event listener to trigger the animation
      image.addEventListener('mouseover', () => {
        // Move the image up
        image.style.transform = 'translateY(-5px)';
        // Change the box-shadow properties
        image.style.boxShadow = `10px 15px ${options.shadow_type} 1px rgba(0,0,0,0.24)`;
      });
      
      // Add a mouseleave event listener to reset the animation
      image.addEventListener('mouseleave', () => {
        // Move the image back down
        image.style.transform = 'translateY(0px)';
        // Reset the box-shadow properties
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
      });
    }
  });
}
