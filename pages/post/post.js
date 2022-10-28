/* Desenvolva seu script aqui */
import { renderPost } from "../../scripts/render.js"

const post = JSON.parse(localStorage.getItem('post'))

renderPost(post)

