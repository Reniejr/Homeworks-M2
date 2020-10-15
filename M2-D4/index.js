/* -------------------------------------------------------------------------------------------------------- */

window.onload = function (){

    //INTRO - LOGO ANIMATION

    //LAYOUT HIDDEN under for the INTRO
    let header = document.getElementById('header')
    let main = document.getElementById('main')
    let footer = document.getElementById('footer')
    
    header.style.opacity = '0' 
    main.style.opacity = '0'
    footer.style.opacity = '0'
    document.body.style.backgroundColor = 'white'
    

    //INTRO VIDEO
    let intro = document.createElement('video')
    intro.id = 'intro'
    intro.src = 'Logo RJD Developer.mp4'
    intro.type = 'video/mp4'
    intro.style.width = '100%'
    intro.style.position = 'absolute'
    intro.style.top = '50%'
    intro.style.transform = 'translateY(-50%)'

    //INTRO - PROPERTY
    intro.muted = 'true'
    intro.play()
    intro.preload= 'none'

    document.body.appendChild(intro)

    //Fade out at the end
    intro.addEventListener('ended', function(){

        intro.style.opacity = '0'
        intro.style.transition = 'opacity 3s ease'
        intro.style.zIndex = '-300'



        //Fade in of layout

        document.body.style.backgroundColor = '#1d1d1d'
        document.body.style.transition = 'background-color 3s ease'
        document.body.style.transitionDelay = '1.7s'
        
        header.style.opacity = '1' 
        main.style.opacity = '1'
        footer.style.opacity = '1'

        header.style.transition = 'opacity 3s ease'
        header.style.transitionDelay = '1.7s'
        main.style.transition = 'opacity 3s ease'
        main.style.transitionDelay = '1.7s'
        footer.style.transition = 'opacity 3s ease'
        footer.style.transitionDelay = '1.7s'

    },false)
}

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
})
  
/* FUNCTIONS - ADD TEAMS -------------------------------------------------------------------------------------------------------- */

    let teamsList = []
    let counterUlt = 0
    let numberTeams = document.querySelector('#teams_input .text_input')
    let counterCol = 0

    teamsAdd.addEventListener('click', function(){

        for( let a = 0; a < parseInt(numberTeams.value); a++){

            // NEW COLUMN
            let newCol = document.createElement('div')
            newCol.classList.add('col')
            newCol.id = counterCol
            counterCol = counterCol + 1
            teamsRow.appendChild(newCol)

            //NEW TEAM LIST
            let teamUl = document.createElement('ul')
            teamUl.id = counterUlt
            teamUl.classList.add = 'team_list'
            teamsList.push(teamUl)
            teamUl.innerText = 'Team '+ (a + 1) + '\n'
            newCol.appendChild(teamUl)

            //BUTTON SELECT MEMBERS
            let mixButton = document.createElement('input')
            mixButton.type = 'button'
            mixButton.value = 'Select Memebers'
            mixButton.id = counterUlt

            //FUNCTION FOR BUTTON SELECT MEMBERS
            mixButton.addEventListener('click', function(){

                //SELECT THE RANDOM MEMBER
                let casual = Math.floor(Math.random()*(newNamesList.length+1))

                let newTeamMember = document.createElement('li')
                newTeamMember.innerText = newNamesList[casual].innerText
                teamUl.appendChild(newTeamMember)

                //REMOVE FROM NAMES LIST
                namesUl.removeChild(newNamesList[casual])
                newNamesList.splice(casual, 1)
                
                //BUTTON REMOVE
                let removeFromTeam = document.createElement('input')
                removeFromTeam.type = 'button'
                removeFromTeam.value = 'Remove'
                removeFromTeam.addEventListener('click', function(){

                    //REMOVE FROM TEAM LIST AND PUSH IT ON NAMES LIST AGAIN
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
        
        //RESET THE TEXT BOX
        numberTeams.value = ''
    })

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
