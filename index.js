document.addEventListener("DOMContentLoaded",
  memeList() ,
  formInput()
)


function memeList() {
  fetch("https://api.imgflip.com/get_memes")
  .then (response => response.json())
  .then (object => {
    object.data.memes.forEach(meme => {
      const ul = document.querySelector('ul')
      const li = document.createElement('li')
      ul.appendChild(li)
      li.innerText = meme.name
      
      memeDisplay(meme,li)                               
       })
     })
    }

    
function memeDisplay(meme,li) {
  li.addEventListener('click', () => {
    const div = document.querySelector("div")
    const h2 =  document.createElement('h2')
    const image = document.createElement('img')
    div.appendChild(h2)
    div.appendChild(image)
    h2.innerText = meme.name
    image.src = meme.url
    div.addEventListener('click',() => div.innerText= "" )
     })
    }
    

function formInput() {
  const form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const div = document.querySelector("div")
    const h2 =  document.createElement('h2')
    const image = document.createElement('img')
    div.appendChild(h2)
    div.appendChild(image)
    const firstForm = document.querySelector("#first-form")
    const secondForm = document.querySelector("#second-form")
    h2.innerText = firstForm.value
    image.src = secondForm.value
    form.reset()
    div.addEventListener('click',() => div.innerText= "" )
   })
 }

    

    
       
  
      

    
   
