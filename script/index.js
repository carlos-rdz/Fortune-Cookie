
const triggerELement = document.querySelector(`[data-trigger]`);
const outputElement = document.querySelector('[data-output]')


triggerELement.addEventListener('click', function() { 
    outputElement.textContent = fortunes.pop();  
});

const fortunes = [
    "Meh",
    "Ignore previous fortunes",
    "A new pair of shoes will do you a world of good",
    "Some fortune cookies contain no fortune",
    "Today is propably a huge improvement over yesterday"
]

