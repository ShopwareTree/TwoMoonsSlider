
import Plugin from 'src/plugin-system/plugin.class';

export default class TwoMoonsSlider extends Plugin {
    init() {
        this.el.setAttribute('id', getSlideId());
        
        /* gets the first item with the query selector */
        const prevBtn = this.el.querySelector('.base-slider-controls-prev');
        const nextBtn = this.el.querySelector('.base-slider-controls-next');
        let tmsw = this.el.querySelector('.twomoons-slider-wrapper-scroll');
        
        if (!tmsw) {
            tmsw = this.el.querySelector('.twomoons-slider-wrapper-desktop');
        }

        let isDown = false;
        let startX;
        let scrollLeft;
        if (tmsw) {
            tmsw.addEventListener('mousedown', (e) => {
                isDown = true;
                tmsw.classList.add('active');
                startX = e.pageX - tmsw.offsetLeft;
                scrollLeft = tmsw.scrollLeft;
            });
            /*this.el.addEventListener('mouseleave', () => {
                isDown = false;
                this.el.classList.remove('active');
                console.log("mouseleave");
            });*/
            document.addEventListener('mouseup', (e) => {
                isDown = false;
                tmsw.classList.remove('active');
            });
    
            tmsw.addEventListener('mouseup', () => {
                isDown = false;
                tmsw.classList.remove('active');
            });
    
            const links = document.querySelectorAll('a');
                links.forEach(element => {element.addEventListener('mousedown',function(e) { 
                    e.preventDefault();
                });
            });
    
            tmsw.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - tmsw.offsetLeft;
                const walk = (x - startX)*3; // The number 3 determines the sensitivity of the drag
                tmsw.scrollLeft = scrollLeft - walk;
            });
    
            prevBtn.addEventListener('click', () => {
                // Assuming all items have the same width
                const itemWidth = this.el.querySelector('.slider-item').clientWidth;
                tmsw.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
            });
        
            nextBtn.addEventListener('click', () => {
                const itemWidth = this.el.querySelector('.slider-item').clientWidth;
                tmsw.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
            });
        };
    }
}

/* Function to make a unique ID for the slider if there are more on 1 page */
function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;    
    return 'twomoonsslider' + window.tnsId;
  }