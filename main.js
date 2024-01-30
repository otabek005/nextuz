
let slide = document.querySelectorAll('.carusel-items')
let step = 0;
let go = document.querySelector('.slide')

function nextslide(){
    step++;
    if(step >= slide.length){
        step = 0;
    }else{
        go.style.transform = `translate(${-step*1230}px)`
    }
}

function prewslide(){
    step--;
    if(step < 0){
        step = slide.length;
    }else{
        go.style.transform = `translate(${step*-1230}px)`
    }
}