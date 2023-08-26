const contactForm = document.getElementById('contactForm');
const responseDiv = document.getElementById('response');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    try {
        const response = await fetch('your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        });

        const responseData = await response.json();
        responseDiv.textContent = responseData.message;
    } catch (error) {
        responseDiv.textContent = 'An error occurred. Please try later';
    }
});