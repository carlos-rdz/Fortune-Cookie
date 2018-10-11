
const triggerELement = document.querySelector(`[data-trigger]`);
const outputElement = document.querySelector('[data-output]')


triggerELement.addEventListener('click', function() {
    console.log("Hello");
    outputElement.textContent = 'lalallalal'
    
});


