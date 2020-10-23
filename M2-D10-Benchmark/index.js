//RESPONSIVE CONTAINER CENTERED
    /*let introContainer = document.createElement('div')
    introContainer.className = 'col'
    introContainer.style.width = '100%'
    introContainer.style.position = 'absolute'
    introContainer.style.top = '30%'
    introContainer.style.padding = '0'
    introContainer.style.margin = '0'
    
//VIDEO-INTRO
    let intro = document.createElement('video')
    intro.src = 'Logo Animato RJD Developer.mp4'
    intro.style.width = '100%'
    intro.style.position = 'absolute'
    intro.autoplay = 'true'
    intro.muted = 'true'
    intro.play

//PROJECT (ACTUAL BODY)
    let project = document.getElementById('project')
    project.style.display = 'none'


window.onload = function (){

    //BODY SIZE NO SCROLLBARS
    document.body.style.position = 'relative'
    document.body.style.width = '100%'
    document.body.style.height = '100vh'

    //VIDEO INTRO CREATED AND APPENDED
    introContainer.appendChild(intro)
    document.body.appendChild(introContainer)

    //ANIMATION AT THE END OF THE VIDEO
    intro.addEventListener('ended', function(){

        //ANIMATION VIDEO
        intro.style.transform = 'scale(0.1, 0.1)'
        intro.style.transition = 'transform 0.5s linear'

        //REMOVE VIDEO
        setTimeout(function(){document.body.removeChild(introContainer)},499)

        //RESET BODY SIZES
        setTimeout(function(){document.body.style.height = 'auto'}, 501)

        //PROJECT FADE-IN ANIMATION
        setTimeout(function(){
            project.style.display = 'block'
            project.style.opacity = '0'
        }, 502)

        setTimeout(function(){
            project.style.opacity = '1'
            project.style.transition = 'opacity 2s ease'
        }, 702)

    },false)

}*/

/* SLIDER-------------------------------------------------------------------------------------------------------- */
let sliderContainer = document.querySelector('.slide-container')
let slide = document.querySelectorAll('.slide')


const prev = function(){

    switch(sliderContainer.style.marginLeft){
        case sliderContainer.style.marginLeft = '0':
            sliderContainer.style.marginLeft = '-400%';
            slide[3].style.opacity = '0.5';
            slide[4].style.opacity = '1';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-100%':
            sliderContainer.style.marginLeft = '0';
            slide[1].style.opacity = '0.5';
            slide[0].style.opacity = '1';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-200%':
            sliderContainer.style.marginLeft = '-100%';
            slide[0].style.opacity = '0.5';
            slide[1].style.opacity = '1';
            slide[2].style.opacity = '0.5';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-300%':
            sliderContainer.style.marginLeft = '-200%';
            slide[1].style.opacity = '0.5';
            slide[2].style.opacity = '1';
            slide[3].style.opacity = '0.5';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-400%':
            sliderContainer.style.marginLeft = '-300%';
            slide[2].style.opacity = '0.5';
            slide[3].style.opacity = '1';
            slide[4].style.opacity = '0.5';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        default:
            ;
    }
}

const next = function(){

    switch(sliderContainer.style.marginLeft){
        case sliderContainer.style.marginLeft = '0':
            sliderContainer.style.marginLeft = '-100%';
            slide[0].style.opacity = '0.5';
            slide[1].style.opacity = '1';
            slide[2].style.opacity = '1';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-100%':
            sliderContainer.style.marginLeft = '-200%';
            slide[1].style.opacity = '0.5';
            slide[2].style.opacity = '1';
            slide[3].style.opacity = '0.5';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-200%':
            sliderContainer.style.marginLeft = '-300%';
            slide[2].style.opacity = '0.5';
            slide[3].style.opacity = '1';
            slide[4].style.opacity = '0.5';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-300%':
            sliderContainer.style.marginLeft = '-400%';
            slide[3].style.opacity = '0.5';
            slide[4].style.opacity = '1';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        case sliderContainer.style.marginLeft = '-400%':
            sliderContainer.style.marginLeft = '0';
            slide[1].style.opacity = '0.5';
            slide[0].style.opacity = '1';
            sliderContainer.style.transition = 'margin-left 1s ease'
        break;
        default:
            ;
    }
}
switch(sliderContainer.style.marginLeft){
    case sliderContainer.style.marginLeft = '0':
        slide[1].style.opacity = '0.5';
        slide[0].style.opacity = '1';
    break;
    case sliderContainer.style.marginLeft = '-100%':
        slide[0].style.opacity = '0.5';
        slide[1].style.opacity = '1';
        slide[2].style.opacity = '0.5';
    break;
    case sliderContainer.style.marginLeft = '-200%':
        slide[1].style.opacity = '0.5';
        slide[2].style.opacity = '1';
        slide[3].style.opacity = '0.5';
    break;
    case sliderContainer.style.marginLeft = '-300%':
        slide[2].style.opacity = '0.5';
        slide[3].style.opacity = '1';
        slide[4].style.opacity = '0.5';
    break;
    case sliderContainer.style.marginLeft = '-400%':
        slide[4].style.opacity = '1';
        slide[3].style.opacity = '0.5';
    break;
    default:
        ;
}

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */
