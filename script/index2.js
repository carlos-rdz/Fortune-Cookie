function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

const outputElement = document.querySelector('[data-output]');
const outputElementimg = document.querySelector('[data-imgoutput]');

const fortunes = [
    { text:"Meh", image: "images/meh.png"},
    { text:"Ignore previous fortunes", image:"images/ignore.jpeg"},
    { text:"A new pair of shoes will do you a world of good", image:"images/shoes.jpeg"},
    { text:"Some fortune cookies contain no fortune", image:"images/fortune.jpeg"},
    { text:"Today is propably a huge improvement over yesterday", image:"images/today.jpeg"}
]

const jokes = [
    {text:"I hate russian dolls, they are so full of themselves", image:"images/doll.jpeg"},
    {text:"Dont you hate it when someone answeres their own question? I do.", image:"images/question.png"},
    {text:"I wrote a song about a tortilla, actually is more of a wrap", image:"images/tortilla.jpeg"},
]


function createButton(text,whichOne){
    const theButton = document.createElement('button');
    theButton.textContent = text;
    theButton.setAttribute('data-trigger','')
    
    theButton.addEventListener('click', function() { 
        let randomNumber = getRandomInt(0,whichOne.length)
        outputElement.textContent = whichOne[randomNumber]['text'];
        outputElementimg.setAttribute("src",whichOne[randomNumber]['image'])  
    });
    
    
    
    return theButton
}




function createButtonContainer(){
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');
    
    const theFortuneButton = createButton('Click here for a fortune',fortunes);
    buttonContainer.appendChild(theFortuneButton)
    
    const theJokeButton = createButton('Click here for a joke',jokes);
    buttonContainer.appendChild(theJokeButton)

    return buttonContainer;
}


let theBody = document.querySelector('body');
document.body.appendChild(createButtonContainer())

