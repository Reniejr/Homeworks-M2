/* -------------------------------------------------------------------------------------------------------- */

/*window.onload = function (){

    //INTRO - LOGO ANIMATION

    //LAYOUT HIDDEN under for the INTRO
    let header = document.getElementById('header')
    let main = document.getElementById('main')
    let footer = document.getElementById('footer')
    header.style.display = 'none' 
    main.style.display = 'none'
    footer.style.display = 'none'
    

    //INTRO VIDEO
    let intro = document.createElement('video')
    intro.id = 'intro'
    intro.src = 'Logo RJD Developer.mp4'
    intro.type = 'video/mp4'
    intro.style.width = '100%'
    intro.style.height = '100%'
    intro.style.position = 'absolute'

    //INTRO - PROPERTY
    intro.muted = 'true'
    intro.play()
    intro.preload= 'none'

    document.body.appendChild(intro)

    //Fade out at the end
    intro.addEventListener('ended', function(){

        intro.style.opacity = '1'
        intro.style.transition = 'opacity 3s ease'

        intro.style.opacity = '0'
        intro.style.transition = 'opacity 3s ease'

        intro.style.display = 'none'


        //Fade in of layout

            
        header.style.display = 'block' 
        main.style.display = 'block'
        footer.style.display = 'block'

        
        header.style.opacity = '0' 
        main.style.opacity = '0'
        footer.style.opacity = '0'

        header.style.transition = 'opacity 2s ease'
        main.style.transition = 'opacity 2s ease'
        footer.style.transition = 'opacity 2s ease'

        header.style.opacity = '1' 
        main.style.opacity = '1'
        footer.style.opacity = '1'

        header.style.transition = 'opacity 2s ease'
        main.style.transition = 'opacity 2s ease'
        footer.style.transition = 'opacity 2s ease'

    },false)
}*/

/* CONTAINERS SELECTED-------------------------------------------------------------------------------------------------------- */

let names = document.querySelector('#names')
let namesInput = document.querySelector('#names_input')
let namesResult = document.querySelector('#names_result')
let teams = document.querySelector('#teams')
let teamsInput = document.querySelector('#teams_input')
let teams_Result = document.querySelector('#teams_result')

/* ELEMENTS SELECTED-------------------------------------------------------------------------------------------------------- */

let namesText = document.querySelector('#names_input .text_input')
let namesAdd = document.querySelector('#names_input .button')
let namesUl = document.querySelector('#names_result ul')
let namesRow = document.querySelector('#names_row')

let teamsAdd = document.querySelector('#teams_input .button')
let teamsRow = document.querySelector('#teams_row')

/* FUNCTIONS - ADD NAMES -------------------------------------------------------------------------------------------------------- */


let newNamesList = []
let namesUlList = []
let counter = 0
let counterUl = 0

namesAdd.addEventListener('click', function(){

    let newName = document.createElement('li')
    newName.id = counter
    counter = counter+1
    newName.innerText = namesText.value

    newNamesList.push(newName)
    namesUl.appendChild(newName)

    namesUl.id = counterUl
    namesUlList.push(namesUl)
    counterUl = counterUl + 1
    namesText.value = ''

    /*if(counter>3){

        let newNamesCol = document.createElement('div')
        newNamesCol.classList.add = 'col-6 col-md-3 col-lg-2'

        let newNamesUl = document.createElement('ul')
        newNamesUl.innerText = 'Names'
        newNamesCol.appendChild(newNamesUl)
        namesRow.appendChild(newNamesCol)

        let newName = document.createElement('li')
        newName.id = counter
        counter = counter+1
        newName.innerText = namesText.value
        newNamesList.push(newName)
        newNamesUl.appendChild(newName)
        newNamesUl.id = counterUl
        namesUlList.push(namesUl)
        counterUl = counterUl + 1
    }*/

})

function shuffle() {
    var currentIndex = newNamesList.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = newNamesList[currentIndex];
      newNamesList[currentIndex] = newNamesList[randomIndex];
      newNamesList[randomIndex] = temporaryValue;
    }
}
  
/* FUNCTIONS - ADD TEAMS -------------------------------------------------------------------------------------------------------- */

    let teamsList = []
    let counterUlt = 0
    let numberTeams = document.querySelector('#teams_input .text_input')
    let counterCol = 0

    teamsAdd.addEventListener('click', function(){

        for( let a = 0; a < parseInt(numberTeams.value); a++){

            let newCol = document.createElement('div')
            newCol.classList.add('col')
            newCol.id = counterCol
            counterCol = counterCol + 1
            teamsRow.appendChild(newCol)


            let teamUl = document.createElement('ul')
            teamUl.id = counterUlt
            teamsList.push(teamUl)
            teamUl.innerText = 'Team '+ (a + 1)
            newCol.appendChild(teamUl)

            let mixButton = document.createElement('input')
            mixButton.type = 'button'
            mixButton.value = 'Select Memebers'
            mixButton.id = counterUlt
            mixButton.addEventListener('click', function(){

                let casual = Math.floor(Math.random()*(newNamesList.length+1))

                let newTeamMember = document.createElement('li')
                newTeamMember.innerText = newNamesList[casual].innerText
                teamUl.appendChild(newTeamMember)
                namesUl.removeChild(newNamesList[casual])
                newNamesList.splice(casual, 1)
                

                let removeFromTeam = document.createElement('input')
                removeFromTeam.type = 'button'
                removeFromTeam.value = 'Remove'
                removeFromTeam.addEventListener('click', function(){

                newNamesList.push(newTeamMember)
                teamUl.removeChild(newTeamMember)
                newTeamMember.removeChild(removeFromTeam)
                namesUl.appendChild(newTeamMember)

                })
                newTeamMember.appendChild(removeFromTeam)

                
            })
            teamUl.appendChild(mixButton)

            counterUlt = counterUlt + 1
        }
        
        numberTeams.value = ''
    })

/* FUNCTIONS - ADD MEMBERS -------------------------------------------------------------------------------------------------------- */

const addMembers = function(){


}

/* FUNCTIONS - RESET-------------------------------------------------------------------------------------------------------- */

const resetApp = function(){

    teamsList = []
    newNamesList = []
    namesUlList = []
    while(teamsRow.lastChild.id !== 'teams_input'){
        teamsRow.removeChild(teamsRow.lastChild)
    }
    while(namesUl.innerText !== 'Names'){
        namesUl.removeChild(namesUl.lastChild)
    }
    numberTeams.value = ''
    namesText.value = ''
    
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
