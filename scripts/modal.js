const modal_container = document.getElementById('modal_container');
const input_modal = document.getElementById('input_modal');
const modal_form = document.getElementById('modal_form');
const close_modal_btn = document.getElementById('close_modal_btn');
const input_modal_submit = document.getElementById('input_modal_submit');


// localStorage.clear()
const modalOpen = () => {
    localStorage.setItem('modalOpen', 'true')
}

function isOpen() {
    return localStorage.getItem('modalOpen') === 'true'
}


if (!isOpen()) {
    const initializeTimeout = setTimeout(() => {
        modal_container.style.display = 'flex'
    }, 5000);

    const checkScroll = () => {
        const bodyHeight = document.body.offsetHeight;
        const scrollY = window.scrollY;
        const scrollPercentage = (scrollY / bodyHeight) * 100;

        if (!isOpen() && scrollPercentage >= 25) {

            clearTimeout(initializeTimeout);
            modal_container.style.display = 'flex';

        }
    }

    window.addEventListener('scroll', checkScroll);
}



close_modal_btn.addEventListener('click', () => {
    modal_container.style.display = 'none';
    modalOpen();
})

document.addEventListener("keydown", (event) => {
    if (event.key === 'Escape') {
        modal_container.style.display = "none";
        modalOpen();

    }
});
modal_container.addEventListener("click", (event) => {
    if (event.target === modal_container) {
        modal_container.style.display = "none";
        modalOpen();

    }
});


const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

input_modal_submit.addEventListener('click', (e) => {
    e.preventDefault();

    const email = input_modal.value;
    let emailValid = true;
    const sendInput = (url, data) => {
        try {
            const sendData = fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then((res) => {
                    if (res.ok) {
                        console.log(res.ok)
                    }

                })
        } catch (error) {
            console.error("Error sending the form:", error);
        }
    }

    if (!emailRegex.test(email)) {
        input_modal.style.borderColor = '#eb476e';
        emailValid = false;
        alert('Fill with a correct email address')
    } else {
        emailValid = true;
    }

    if (emailValid) {
        modal_container.style.display = 'none';
        sendInput("https://jsonplaceholder.typicode.com/posts", input_modal);
        modalOpen()
    } else {
        input_modal.style.border = '1px solid #eb476e'
    }

})
