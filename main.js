'use strict';

class DynamicImage {
    constructor() {
        this.slider = document.querySelectorAll('.slider');
        this.frame = document.querySelectorAll('.frame');
        this.limit = this.frame.clientWidth;
    }

    work() {
        for (let i = 0; i < this.slider.length; i++) {
            this.slider[i].addEventListener('mousemove', (even) => {   //mousemove  mousedown  mouseup
                this.frame[i].style = `width: ${Number(even.clientX) - 50}px`
            });
        }
    }

    init() {
        this.work();
    }
}
