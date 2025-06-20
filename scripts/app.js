
// ? Store the <body> element inside a const called "body"

const body = document.querySelector("body")

// ? Create a <h1> element and store it in a const called "heading".

const heading = document.createElement("h1")

// ? Using innerHTML give the text "I am a heading" to the "heading" element.

heading.innerHTML = "I am a heading"

// ? Append the "heading" element to "body" element.

body.appendChild(heading)

// ? Set "heading" text colour to grey

body.style.color = "grey"

// ? Give "heading" a border of 2px solid green

heading.style.border = "2px solid green"

// ? Give "heading" 20px of padding

heading.style.padding = "20px";

// ? Use JavaScript to find the height of the "heading" element (including the padding and border) and then console log it. (You should get 81).

console.log (heading.offsetHeight)

// ? Create a <div> and store it in a const called "box"

const box = document.createElement("div")

// ?  Add the string "I am a div" inside the "box" div

box.innerText = "I am a div"

// ? Append "box" to the body of the HTML

body.appendChild(box)

// ? Give "box" the class of "box"

box.classList.add("box")

// ? Give "box" the id of "single"

box.id ="single"

// ? Console.log the child elements of the "body" we saved to a variable earlier
console.log(body)

// ? Give "box" the data attribute of "data-id='1'"

box.setAttribute("data-id","1")

// ? Find the vertical offset position of "box" (how far down it is from the top of the page) and console log it. (You should get 124).

console.log(box.offsetTop)