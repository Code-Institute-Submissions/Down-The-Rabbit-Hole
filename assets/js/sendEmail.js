function sendMail(contactForm) {
    emailjs.send("gmail", "rabbithole", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "artwork_request": contactForm.requirements.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  }