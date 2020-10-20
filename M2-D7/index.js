// EX11) Write a function to add a new link into the navbar

let navBar = document.querySelector('nav')

const addLink = function(){

    let newLink = document.createElement('a')
    newLink.className = "p-2 text-muted"
    newLink.href = '#'
    newLink.innerText = 'New Link'
    
    navBar.appendChild(newLink)

}

// EX12) Write a function to remove the "Search" magnifying glass icon

let searchBar = document.querySelector('.row div:last-of-type')
let searchGlass = document.querySelector('.row div:last-of-type a:first-of-type')

const removeGlass = function(){

    searchBar.removeChild(searchGlass)

}

// EX13) Write a function to change the background of the jumbotron

let jumbotron = document.querySelector('.jumbotron')

const jumboBg = function(){

    jumbotron.classList.remove('bg-dark')
    jumbotron.style.backgroundColor = 'blue'

}

// EX14) Write a function to change the color of the main title

let title = jumbotron.querySelector('h1')

const changeTitleColor = function (){
    title.style.color = 'white'
}

// EX15) Write a function to change the column size for post headings

let rowPost = document.querySelector('.jumbotron + .row')
let cols = rowPost.querySelectorAll('.col')

const changeColSize = function (){

    for( let a = 0; a < cols.length; a++){

        cols[a].classList.remove('col-md-6')
        cols[a].className = 'col-12'
    }
}

// EX16) Write a function to remove all the links under "Elsewhere"

let elsewhere = document.querySelector('aside > div:nth-child(3) > ol')

let listItems = elsewhere.querySelectorAll('li')
const removeLinks = function (){

    for(let b=0; b<listItems.length; b++){
        elsewhere.removeChild(listItems[b])
    }
}

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

let blogPost = document.querySelectorAll('.blog-post')

let firstP = document.querySelectorAll('.blog-post > p:nth-of-type(2)')

const removeFifty = function (){

    for(let c = 0; c < firstP.length; c++){

        let letters = Array.from(firstP[c].innerText)
        delete letters.splice(0, 50)
        let newP = letters.join('')
        firstP[c].innerText = newP
    }
}

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

let newerButton = document.querySelector('.blog-pagination a:nth-of-type(2)')

let main = document.querySelector('.blog-main')

newerButton.classList.remove('disabled')


newerButton.addEventListener('click', function(){

    newerButton.removeAttribute('href')

    let newBlogPost = document.createElement('div')
    newBlogPost.className = 'blog-post'

    let newTitleBlog = document.createElement('h2')
    newTitleBlog.innerText = 'New Blog Post'

    let newPBlog = document.createElement('p')
    newPBlog.innerText = 'New content Blog'

    newBlogPost.appendChild(newTitleBlog)
    newBlogPost.appendChild(newPBlog)

    main.appendChild(newBlogPost)
})

//EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

let oldButton = document.querySelector('.blog-pagination a:nth-of-type(1)')

oldButton.removeAttribute('href')


oldButton.addEventListener('click', function(){

    let allBlogs = document.querySelectorAll('.blog-post')
    main.removeChild(allBlogs[allBlogs.length-1])
        
})


//EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

let authorName = document.querySelectorAll('.blog-post > p:first-of-type > a')

for(let d=0; d < authorName.length; d++){

    authorName[d].addEventListener('mouseover', function(){

        alert(authorName[d].innerText)
    })
}