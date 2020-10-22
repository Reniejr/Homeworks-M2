window.onload = function (){

    //INTRO - LOGO ANIMATION

    //STYLE BEFORE INTRO
    document.body.style.backgroundColor = 'white'
    let mainContainer = document.querySelector('#main_container')
    mainContainer.style.opacity = '0'
    //mainContainer.style.display = 'none'

    //mainContainer.style.display = 'block'

    //INTRO VIDEO
    let intro = document.createElement('video')
    intro.id = 'intro'
    intro.src = 'Logo Animato RJD Developer.mp4'
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


        //fade in elements after INTRO

        document.body.style.backgroundColor = 'black'
        document.body.style.transition = 'background-color 1s ease'


        mainContainer.style.opacity = '1'
        mainContainer.style.transition = 'opacity 3s ease'

        document.body.removeChild(containerIntro)

    },false)
 
}

let breadcrumb = document.querySelector('#breadcrumb')
let bSlide = document.querySelector('#breadcrumb div')

bSlide.addEventListener('click', function(){

    if(breadcrumb.style.marginTop = '-5vh'){
        breadcrumb.style.marginTop = '0'
    }
    else if(breadcrumb.style.marginTop = '0'){
        breadcrumb.style.marginTop = '-5vh'
    }

})

let removebtn = document.querySelectorAll('#album_details .btn')
let tracksRow = document.querySelectorAll('#album_details .row')
let tracksTable = document.getElementById('album_details')

for( let a = 0; a < removebtn.length; a++){

    removebtn[a].addEventListener('click', function(){

        tracksRow[a+1].style.opacity = '0'
        tracksRow[a+1].style.transition = 'opacity 3s ease'
        setTimeout(function(){tracksTable.removeChild(tracksRow[a+1])}, 3000)
    })
}

let albumSource = document.querySelector('.modal-body input:nth-of-type(1)')
let addSource = document.querySelector('.modal-body input:nth-of-type(2)')
let albumTitle = document.querySelector('.modal-body input:nth-of-type(3)')
let addTitle = document.querySelector('.modal-body input:nth-of-type(4)')



let newAlbum = document.createElement('div')
newAlbum.className= 'col-3'
let albumImg = document.createElement('img')

let source = function(){

    albumImg.src = albumSource.value
    newAlbum.appendChild(albumImg)
}


let newTitle = document.createElement('div')
newTitle.className = 'col-3'
let titleWord = document.createElement('h6')

let titleAdd = function(){

    titleWord.innerText = albumTitle.value
    newTitle.appendChild(titleWord)
}


let newRow = document.createElement('div')
newRow.className= 'row'

let addTrack = function(){

    let newLenght = document.createElement('div')
    newLenght.className = 'col-3'
    let lenghtWord = document.createElement('h6')
    lenghtWord.innerText = '?'
    newLenght.appendChild(lenghtWord)

    let newRemove = document.createElement('div')
    newRemove.className = 'col-3'
    let removeButton = document.createElement('button')
    removeButton.classList.add = 'btn'
    removeButton.classList.add = 'btn-outline-secondary'
    removeButton.innerText = 'REMOVE'
    removeButton.addEventListener('click', function(){

        newRow.style.opacity = '0'
        newRow.style.transition = 'opacity 3s ease'
        setTimeout(function(){tracksTable.removeChild(newRow)}, 3000)
    } )
    newRemove.appendChild(removeButton)


    newRow.appendChild(newAlbum)
    newRow.appendChild(newTitle)
    newRow.appendChild(newLenght)
    newRow.appendChild(newRemove)

    tracksTable.appendChild(newRow)

}