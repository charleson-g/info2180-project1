document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.newsletter form'); 
    const emailInput = document.getElementById('email'); 
    const messageDiv = document.querySelector('.message'); 

    // Regular Expression for basic email validation: checks for username@domain.tld
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 

    if (!form) {
        console.error("Error: Newsletter form element not found.");
        return;
    }

    form.addEventListener('submit', function(event) {
        
        // Stops the page from reloading
        event.preventDefault(); 

        const email = emailInput.value.trim();

        // Check if the field is empty OR 2. If the email doesn't match the required pattern
        if (email === '' || !emailRegex.test(email)) {
            
            // Error message
            messageDiv.textContent = 'Please enter a valid email address.';
            
        } else {
            // Success message 
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            
            // Clear the input field
            emailInput.value = '';
        }
        
        // Ensures the text is white against the green background
        messageDiv.style.color = 'white'; 
    });
});