document.addEventListener('DOMContentLoaded',lalala)


function lalala(){
    document.querySelectorAll("a").forEach(item =>{
        item.addEventListener('click',dianji)
    })
    createBlogCard()
}


function dianji(ev){
    document.querySelectorAll("nav a").forEach(item =>{
        item.classList.remove('active')
    })
    ev.target.classList.add('active')
}


function createBlogCard(){
    let contentDiv  = document.querySelector('.home-blog-content');
    contentDiv.innerHTML="";

    for(let i = 0; i < 3; i++){
        let cardContent = blog[i]

        let blogcard = document.createElement('div')
        blogcard.className = "home-blog-card"

        let blogimg = document.createElement('img')
        blogimg.className = "home-blog-img"
        blogimg.src = cardContent.Image

        let blogtitle = document.createElement('div')
        blogtitle.className = "home-blog-card-title"

        let aDiv = document.createElement('div')
        let aP = document.createElement('p')
        aP.textContent = cardContent.title

        blogtitle.appendChild(aDiv)
        blogtitle.appendChild(aP)

        blogcard.appendChild(blogimg)
        blogcard.appendChild(blogtitle)

        contentDiv.appendChild(blogcard)
    }
}