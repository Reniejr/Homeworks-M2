window.onload = function (){

    //INTRO - LOGO ANIMATION

    //STYLE BEFORE INTRO
    document.body.style.backgroundColor = 'white'
    let mainContainer = document.querySelector('#main_container')
    mainContainer.style.opacity = '0'
    mainContainer.style.display = 'none'

    //INTRO VIDEO
    let intro = document.createElement('video')
    intro.id = 'intro'
    intro.src = 'Logo RJD Developer.mp4'
    intro.type = 'video/mp4'
    intro.style.width = '100%'
    intro.style.position = 'absolute'
    intro.style.top = '50%'
    intro.style.left = '50%'
    intro.style.transform = 'translateX(-50%) translateY(-50%)'

    //INTRO - PROPERTY
    intro.muted = 'true'
    intro.play()
    intro.preload= 'none'

    let containerIntro = document.querySelector('#containerIntro') 

    containerIntro.appendChild(intro)

    //Fade out at the end
    intro.addEventListener('ended', function(){

        /*intro.style.opacity = '1'
        intro.style.transition = 'opacity 3s ease'*/

        intro.style.opacity = '0'
        intro.style.transition = 'opacity 3s ease'

        intro.style.zIndex = '-300'

        document.body.style.width = '100%'
        document.body.style.height = '100%'

        mainContainer.style.display = 'block'

        //fade in elements after INTRO

        document.body.style.backgroundColor = 'black'
        document.body.style.transition = 'background-color 1s ease'


        mainContainer.style.opacity = '1'
        mainContainer.style.transition = 'opacity 1s ease'

        document.body.removeChild(containerIntro)

    },false)
 
}