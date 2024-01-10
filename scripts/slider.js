
class Slider {
    constructor(slider) {
        this.slider = document.getElementById(slider);
        this.buttonPrevious = document.getElementById('slider_button_prev');
        this.buttonNext = document.getElementById('slider_button_next');
        this.img = document.querySelectorAll(".slider__img__container__img");
        this.dot = document.querySelectorAll(".slider__dot__container__dot")
        this.caption = document.getElementById('image_caption');
        this.indexImg = 0;
        this.showImage(this.indexImg);
        this.selectDot(this.img);
        this.beforeImage = this.beforeImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.buttonNext.addEventListener('click', this.nextImage);
        this.buttonPrevious.addEventListener('click', this.beforeImage);
        this.autoChange = setTimeout(() => {
            this.nextImage();
        }, 5000);
    }

    showImage(index) {
        this.img.forEach((image, i) => {
            if (i === index) {
                this.caption.innerText = image.alt;
                image.style.display = "block";
                this.dot[i].classList.add('active');
            } else {
                image.style.display = "none";
                this.dot[i].classList.remove('active');
            }
        });

        clearTimeout(this.autoChange);
        this.autoChange = setTimeout(() => {
            this.nextImage();
        }, 5000);
    }

    selectDot(images) {
        window.onclick = e => {
            clearInterval(this.autoChange);
            if (e.target.className === 'slider__dot__container__dot') {
                for (let i = 0; i < images.length; i++) {
                    if (e.target.id == i) {
                        this.indexImg = i;
                        this.showImage(this.indexImg)
                    }
                }
            }
        }
    }
    beforeImage() {
        if (this.indexImg === 0) {
            this.indexImg = this.img.length - 1;
        } else {
            this.indexImg = (this.indexImg - 1) % this.img.length;
        }
        this.showImage(this.indexImg);
    }
    nextImage() {
        this.indexImg = (this.indexImg + 1) % this.img.length;
        this.showImage(this.indexImg);
    }

}

new Slider("slider");