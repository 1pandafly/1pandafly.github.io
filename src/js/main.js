window.addEventListener('DOMContentLoaded', () => {
    //swiper for hero section

    const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 40,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });

    //form from contact section

    const validateTextField = (field) => {
        if (field.value) {
            field.classList.add('validated');
            field.nextElementSibling.classList.remove('show');

            validateForm();
        } else {
            field.classList.remove('validated');
            field.nextElementSibling.classList.add('show');
        }
    }

    const validateEmail = (field) => {
        const emailRegex = new RegExp('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+');

        if (emailRegex.test(field.value)) {
            field.classList.add('validated');
            field.nextElementSibling.classList.remove('show');
            field.nextElementSibling.nextElementSibling.classList.remove('show');

            validateForm();
        } else {
            if (field.value) {
                field.classList.remove('validated');
                field.nextElementSibling.classList.remove('show');
                field.nextElementSibling.nextElementSibling.classList.add('show');
            } else {
                field.classList.remove('validated');
                field.nextElementSibling.classList.add('show');
                field.nextElementSibling.nextElementSibling.classList.remove('show');
            }
        }
    }

    const validateForm = () => {
        if (nameInput.classList.contains('validated') && emailInput.classList.contains('validated') && messageInput.classList.contains('validated')) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit');

    nameInput.addEventListener('blur', function() {
        validateTextField(this);
    });

    emailInput.addEventListener('blur', function() {
        validateEmail(this);
    });

    messageInput.addEventListener('blur', function() {
        validateTextField(this);
    });
});
