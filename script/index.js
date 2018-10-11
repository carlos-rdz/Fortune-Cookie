
const triggerELement_Fortune = document.querySelector(`[data-trigger="Fortune"]`);
const triggerELement_Joke = document.querySelector(`[data-trigger="Joke"]`);
const outputElement = document.querySelector('[data-output]');
const outputElementimg = document.querySelector('[data-imgoutput]');

const fortunes = [
    { fortune:"Meh", image: "images/meh.png"},
    { fortune:"Ignore previous fortunes", image:"images/ignore.jpeg"},
    { fortune:"A new pair of shoes will do you a world of good", image:"images/shoes.jpeg"},
    { fortune:"Some fortune cookies contain no fortune", image:"images/fortune.jpeg"},
    { fortune:"Today is propably a huge improvement over yesterday", image:"images/today.jpeg"}
]

const jokes = [
    {joke:"I hate russian dolls, they are so full of themselves", image:"images/doll.jpeg"},
    {joke:"Dont you hate it when someone answeres their own question? I do.", image:"images/question.png"},
    {joke:"I wrote a song about a tortilla, actually is more of a wrap", image:"images/tortilla.jpeg"},
]
triggerELement_Fortune.addEventListener('click', function() { 
    let randomNumber = getRandomInt(0,fortunes.length)
    outputElement.textContent = fortunes[randomNumber]['fortune'];
    outputElementimg.setAttribute("src",fortunes[randomNumber]['image'])  
});

triggerELement_Joke.addEventListener('click', function() {
    let randomNumber = getRandomInt(0,jokes.length)
    outputElement.textContent = jokes[randomNumber]['joke'];
    outputElementimg.setAttribute("src",jokes[randomNumber]['image'])  
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

