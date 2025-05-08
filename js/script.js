// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Add animations for future implementation
    const addAnimations = () => {
        // This will be expanded in the full portfolio implementation
        document.querySelectorAll('.animate').forEach(element => {
            element.classList.add('animated');
        });
    };
    
    // Call animations after a short delay
    setTimeout(addAnimations, 500);
});