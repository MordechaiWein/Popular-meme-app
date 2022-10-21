document.addEventListener("DOMContentLoaded",
  MemeList() ,
  formInput() 
)


function MemeList() {
    fetch("https://api.imgflip.com/get_memes")
    .then (response => response.json())
    .then (data => {
       const convertedArray = []
       convertedArray.push(data)
       convertedArray[0].data.memes.forEach(meme => {
       const ul = document.querySelector('ul')
       const li = document.createElement('li')
       ul.appendChild(li)
       li.innerText = meme.name

    const liArray = []
    liArray.push(li)
    liArray.forEach(item => {
        item.addEventListener('click', () => {
           const div = document.querySelector("div")
           const h2 =  document.createElement('h2')
           const image = document.createElement('img')
            div.appendChild(h2)
            div.appendChild(image)
            h2.innerText = meme.name
            image.src = meme.url
            div.addEventListener('click',() => div.innerText="" )
          })
        })
      })
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
        div.addEventListener('click',() => div.innerText="" )
       })
      }

    
      
       
     
    
       
  
      

    

    
