
function renderPostsHome(post){
    const ul = document.querySelector('ul')
    // ul.replaceChildren()

    const{id, title, description, content, category, image} = post

        const img = document.createElement('img')
        img.classList = "card-image"
        img.src = image

        const h3 = document.createElement('h3')
        h3.classList = "card-div font-3 font-color-grey100"
        h3.innerText = title

        const p = document.createElement('p')
        p.classList = "font-4 font-color-grey200"
        p.innerText = description

        const span = document.createElement('span')
        span.classList = "font-4-semibold font-color-brand100"
        span.innerText = 'Acessar conteúdo'
        span.addEventListener('click',() =>{
            localStorage.setItem('post', JSON.stringify(post))
            window.location.replace('pages/post/post.html')
        })

        const li = document.createElement('li')
        li.classList = "card flex column card-div"
        li.id = id
        
        
        li.append(img, h3, p, span)
        ul.append(li)
   
}

function renderPost(post){
    const main = document.querySelector('main')
    main.replaceChildren()

    const{id, title, description, content, category, image} = post

    
    const h1 = document.createElement('h1')
    h1.classList = "font-1 font-color-grey100 m-bottom-title"
    h1.innerText = title
    
    const p = document.createElement('p')
    p.classList = "font-4-regular font-color-grey200 m-bottom-subtitle"
    p.innerText = description
    
    const img = document.createElement('img')
    img.classList = "post-image m-bottom-img"
    img.src = image
    
    const pContent = document.createElement('p')
    pContent.classList = "font-4-regular font-color-grey200 "
    p.innerText = content
    
    const div = document.createElement('div')
    div.classList = "m-bottom-p"
    div.append(h1, img, p, pContent)

    main.append(div)
}

export{
    renderPost,
    renderPostsHome,
}