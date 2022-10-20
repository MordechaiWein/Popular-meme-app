document.addEventListener("DOMContentLoaded", getMemes())

function getMemes() {
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
   })
   
   
  
     })
    
    }
            
    
    
