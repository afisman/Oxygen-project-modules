window.onscroll = () => {
    scrollFunction()
}

const scrollFunction = () => {
    let windowScroll = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percentageScrolled = (windowScroll / windowHeight) * 100;
    document.getElementById("scroll_bar").style.width = `${percentageScrolled}%`
}