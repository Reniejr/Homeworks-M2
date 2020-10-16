/* -------------------------------------------------------------------------------------------------------- */
let selected_language = document.getElementById('dropdownMenuButton')
let languages = document.querySelectorAll('.language')

for(let a = 0; a < languages.length; a++){

        languages[a].addEventListener('click', function(){

            selected_language.innerText = languages[a].innerText
        })
}

/* -------------------------------------------------------------------------------------------------------- */
let maturity = document.getElementById('maturity-picked')
let maturitiesRanks = document.querySelectorAll('.maturity_rate')

for(let b = 0; b < maturitiesRanks.length; b++){

    maturitiesRanks[b].addEventListener('click', function(){

        maturity.innerText = maturitiesRanks[b].innerText
    })
}
