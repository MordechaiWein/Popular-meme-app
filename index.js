document.addEventListener("DOMContentLoaded", () => {
  memeList()
  formInput()
})


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

   
function appendElements(memeName, memeUrl) {
  const div = document.querySelector("div")
  const h2 =  document.createElement('h2')
  const image = document.createElement('img')
  div.appendChild(h2)
  div.appendChild(image)
  h2.innerText = memeName
  image.src = memeUrl
  div.addEventListener('click',() => div.innerText= "" )
}


function memeDisplay(meme,li) {
  li.addEventListener('click', () => {
    appendElements(meme.name, meme.url)
  })
}
    

function formInput() {
  const form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const firstForm = document.querySelector("#first-form")
    const secondForm = document.querySelector("#second-form")
    appendElements(firstForm.value, secondForm.value)
    form.reset()
  })
}




  
 


    
   
