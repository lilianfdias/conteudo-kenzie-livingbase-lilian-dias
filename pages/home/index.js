/* Desenvolva seu script aqui */

import { renderPostsHome } from "../../scripts/render.js"
import { getPosts } from "../../scripts/requests.js"
let lastPage = 0
const categoryKey = 'category'
const category = localStorage.getItem(categoryKey)
const posts = await getPosts(lastPage)
// if(posts.length == 0)return
const btnsFilter = document.querySelectorAll('.doFilter')
btnsFilter.forEach(x => {
    x.addEventListener('click', ()=>{
        localStorage.setItem(categoryKey, x.innerText)
        window.location.reload()
    })
})
let postFiltrados = posts.news

if (category != null && category != 'Todos') {
    postFiltrados = postFiltrados.filter(x => category == x.category)
}
postFiltrados.forEach(post => {
    renderPostsHome(post)
})

const lastPost = document.querySelector('li:last-child')
const observer = new IntersectionObserver(async (entries, observer) => {
    if (!entries[0].isIntersecting) return
    observer.unobserve(entries[0].target)
    lastPage++
    const posts = await getPosts(lastPage)

    postFiltrados = posts.news
    if (postFiltrados.length == 0) return

    if (category != null && category != 'Todos') {
        postFiltrados = postFiltrados.filter(x => category == x.category)
    }

    postFiltrados.forEach(post => {
        renderPostsHome(post)
    })

    observer.observe(document.querySelector('li:last-child'))

}, { rootMargin: "200px" })
if(lastPost != null)
observer.observe(lastPost)



