const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.image')

  let slideNumber = 1;
  const length = images.length;
const previousSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--; 
};
const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++; 
};
const getfirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1; 
};
const getlastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length; 
};


right.addEventListener('click',()=>{
    slideNumber < length ? nextSlide() : getfirstSlide();
    
  
});
left.addEventListener('click',()=>{
    slideNumber > 1 ? previousSlide() : getlastSlide();
});
 
let slideInterval;
const startSlideshow = () =>{
    slideInterval = setInterval(()=>{
        slideNumber < length ? nextSlide() : getfirstSlide();
    },2000);
};

const stopSlideshow =() =>{
    clearInterval(slideInterval);
};
startSlideshow();

slider.addEventListener('mouseover',stopSlideshow);
slider.addEventListener('mouseout',startSlideshow);
right.addEventListener('mouseover',stopSlideshow);
right.addEventListener('mouseout',startSlideshow);
left.addEventListener('mouseover',stopSlideshow);
left.addEventListener('mouseout',startSlideshow);