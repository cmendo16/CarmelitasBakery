'use strict';


document.addEventListener('DOMContentLoaded', function () {

    // below is the accordion code

    // selecinting all elements wiht the class 'accordion-label'
    const accordionLabels = document.querySelectorAll('.accordion-label');
    accordionLabels.forEach(function (label) { // iterating ocer each selected accordion label 
        label.addEventListener('click', function () {//adding an event listener to each label 
            this.classList.toggle('open');//toggling the open class on the clicked label 
            const content = this.nextElementSibling;// getting the content that follows the label 
            if (content.style.display === 'block') {// checking if content is being displayed
                content.style.display = 'none';//hide
            } else {
                content.style.display = 'block';//showing content
            }
        });
    });
    // below is the modal code 

    const contactForm = document.getElementById('contactForm');//grabbing the form element 
    const submissionModal = document.getElementById('submissionModal');//grabbing the modal element 
    const closeButton = document.querySelector(".close-button");//grabbing the close button inside the modal

    // defining a function that will show the modal 
    function showModal() {
        submissionModal.style.display = 'block';//setting the modal's display property to block 
    }

    // defining the function that will hide the modal 
    function hideModal() {
        submissionModal.style.display = 'none';
    }

    contactForm.addEventListener('submit', function (e) {// event istener for form submission
        e.preventDefault(); // Preventing the actual form submission

        showModal(); // showing the the thank you modal
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('order').value;

        submitContactForm(name, email, phone, order);
    });

    // event listener for closing the modal
    closeButton.addEventListener('click', hideModal);

    // if the user clicks out of the modal, exit 
    window.addEventListener('click', function (e) {
        if (e.target === submissionModal) {
            hideModal();
        }
    });
});

async function submitContactForm(name, email, phone, message) {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual endpoint
    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Form submitted successfully:', data);
        // Here you can also update the UI to show a success message
        document.getElementById('formResponse').innerHTML = '<p>Form submission successfull! We will get back to you soon.</p>';
    } catch (error) {
        console.error('Error submitting form:', error);
        // Update the UI to show an error message
        document.getElementById('formResponse').innerHTML = '<p>Sorry, there was an error submitting your form. Please try again later.</p>';
    }
} 
