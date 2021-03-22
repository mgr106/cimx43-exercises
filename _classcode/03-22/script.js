console.log ('WIP');


//allParapgrah is a "list of every p tag on the page"
let newLink = document.createElement('a');

// firstparagrpah gets that first item in JS the first item is at 0
let allParagraphs = document.getElementsByTagName('p');
const firstParagraph = allParagraphs [0];
console.log(allParagraphs);

// make our link have usual stuff instead setatircut works for any atrricubte 
newLink.setAttribute('href', '#');

// styles within javascript but kinda nasty newlink.style.display but instead use setattribute ('class' '')
newLink.setAttribute('class', 'readMore');

// innterhtml is for the text people see
newLink.innerHTML = 'Read More';
console.log(newLink);


// we made the link. it has all the good information now we attach to first paragraph apending is goof for that
firstParagraph.appendChild(newLink);


// hide all but first paragraph
for (let i = 0; i< allParagraphs.length; i++) {
    console.log(i);
}