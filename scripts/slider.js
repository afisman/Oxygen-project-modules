
class Slider {
    constructor(slider) {
        this.slider = document.getElementById(slider);
        this.buttonPrevious = document.getElementById('slider_button_prev');
        this.buttonNext = document.getElementById('slider_button_next');
        this.img = document.querySelectorAll(".img-slider");
        this.caption = document.getElementById('image_caption');
        this.indexImg = 0;
        this.showImg(this.indexImg);
        this.beforeImage();
        this.nextImage();
    }

    showImg(index) {
        this.img.forEach((image, i) => {
            if (i === index) {
                this.caption.innerHTML = image.alt;
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }
    beforeImage() {
        this.buttonPrevious.addEventListener("click", () => {
            if (this.indexImg === 0) {
                this.indexImg = this.img.length - 1;
            } else {
                this.indexImg = (this.indexImg - 1) % this.img.length;
            }
            this.showImg(this.indexImg);
        });
    }
    nextImage() {
        this.buttonNext.addEventListener("click", () => {
            this.indexImg = (this.indexImg + 1) % this.img.length;
            this.showImg(this.indexImg);
        });
    }


}

new Slider("slider");