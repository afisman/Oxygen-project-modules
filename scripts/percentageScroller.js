window.onscroll = () => {
    scrollFunction()
}

const scrollFunction = () => {
    const windowScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentageScrolled = (windowScroll / windowHeight) * 100;
    document.getElementById("scroll_bar").style.width = `${Math.ceil(percentageScrolled)}%`
}