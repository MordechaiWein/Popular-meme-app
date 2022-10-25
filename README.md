 # Popular Meme App (phase-1-final-project)

 ## Introduction

Hello, my name is Mordechai Wein. I have created a Popular Meme Application. The application incorporates HTML, CSS and Javascript to create an interactive and lively experience.    

## Description 

After the DOM has loaded I use a fetch request to GET the Memes API
- I tap into the memes array nested in an outer object using dot notation
- I then iterate through the array creating individual memes 
- For each meme a Li tag is created and appended to a Ul tag
- Each individual Li’s inner text is set to the meme’s name

When each Li tag is clicked the meme and its name are displayed on the page. Specifically -
- I add a click event to the Li variable 
- When each Li tag is clicked an H2 and an Image tag are created and appended to a div tag 
- Each H2 tag’s inner text is set to the memes name
- Each image tag’s source is set to the memes url
- I add a click event to the div that empties out the divs inner text and erases the meme from the screen

I created a form for individuals to add their own memes to the page. Specifically- 
- I add a submit event to my form which has two input bars
- I prevent the submit event’s default behavior
- When the form is submitted an H2 and an Image tag are created and appended to a div tag 
- The H2 tag’s inner text is set to the first input bar’s value
- The image tag’s source is set to the second input bar’s value
- The form then resets 
- I add a click event to the div that empties out the divs inner text and erases the image from the screen

## Credit 

Credit is due to Flatiron school for its Toy Tale lab from which I adapted their HTML form, certain CSS, and certain ideas for my project.