const modal_container = document.getElementById('modal_container');
const input_modal = document.getElementById('input_modal');
const modal_form = document.getElementById('modal_form');
const close_modal_btn = document.getElementById('close_modal_btn');

function modalOpen() {
    localStorage.setItem('modalOpen', 'false')
}

function isOpen() {
    return localStorage.getItem('modalOpen') === 'false'
}

if (!isOpen()) {
    const initializeTimeout = setTimeout(() => {
        modal_container.style.display = 'flex'
    }, 5000);

    const checkScroll = () => {
        const windowScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentageScrolled = (windowScroll / windowHeight) * 100;

        if (!isOpen() && percentageScrolled >= 25) {
            clearTimeout(initializeTimeout);
            modal_container.style.display = 'flex'
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
