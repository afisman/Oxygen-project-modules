const return_btn = document.getElementById('return_btn');

return_btn.addEventListener('click', () => {
    setTimeout(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, 200)
});