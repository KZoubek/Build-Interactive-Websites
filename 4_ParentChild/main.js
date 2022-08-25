//First, create a variable called first and set it to the first child of the document body.
const first = document.body.children[0];

//Then, set the inner HTML of the first element to 'BROWN BEARS ARE AWESOME!'.
// Take a moment to note which element has been modified.
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

//Use the .parentNode property to access the parent element of the variable first and
// modify its .style.backgroundColor to 'beige'.
first.parentNode.style.backgroundColor = 'beige';