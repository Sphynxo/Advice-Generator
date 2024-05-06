'use strict';
const dice = document.querySelector('.dice-bg')


async function fetchAdvice() {
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error ('Failed to fetch advice');
        }
        const data = await response.json();
        const advice = data.slip.advice;
        const adviceID = data.slip.id;
        document.querySelector('.heading').textContent = `ADVICE # ${adviceID}`
        document.querySelector('.advice').textContent = advice
    } catch(error) {
        document.querySelector('.advice').textContent = error.message;
    }
}

fetchAdvice()

dice.addEventListener('click', fetchAdvice)