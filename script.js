function hidden() {
    const stepTwo = document.querySelector("#step-two");
    const stepThree = document.querySelector("#step-three");
}

hidden()

function prevOne() {
    const stepOne = document.querySelector(".step-one");
    const stepTwo = document.querySelector(".step-two");
    const steps = document.querySelectorAll('.steps li')

    stepOne.classList.remove('hidden')
    stepTwo.classList.add('hidden')
    steps[1].classList.remove('active');
}

function nextTwo() {
    const stepOne = document.querySelector(".step-one");
    const stepTwo = document.querySelector(".step-two");
    const steps = document.querySelectorAll('.steps li')

    stepOne.classList.add('hidden')
    stepTwo.classList.remove('hidden')
    steps[1].classList.add('active');
}

function prevTwo() {
    const stepOne = document.querySelector(".step-one");
    const stepTwo = document.querySelector(".step-two");
    const stepThree = document.querySelector(".step-three");
    const steps = document.querySelectorAll('.steps li')

    stepOne.classList.add('hidden')
    stepTwo.classList.remove('hidden')
    stepThree.classList.add('hidden')
    steps[2].classList.remove('active');
}

function nextThree() {
    const stepOne = document.querySelector(".step-one");
    const stepTwo = document.querySelector(".step-two");
    const stepThree = document.querySelector(".step-three");
    const steps = document.querySelectorAll('.steps li')

    stepOne.classList.add('hidden')
    stepTwo.classList.add('hidden')
    stepThree.classList.remove('hidden')
    steps[2].classList.add('active');
}

function setCardActive(el) {
  const container = el.parentNode.parentNode
  container.querySelectorAll('.card').forEach((items) => {
    items.classList.remove('active')
  })
  el.parentNode.classList.add('active')
}

function toggleHelpInput() {
    const helpOptions = document.querySelector('.help-options');
    helpOptions.classList.toggle('hidden', !document.querySelector('input#hulp').checked);
}

function toggleSunPannel() {
    const pannelField = document.querySelector('.zonnepanelen-field')
    pannelField.classList.toggle('hidden', !document.querySelector('input#zonnepanelen').checked);
}

function toggleNeeMessage() {
    const message = document.querySelector('.nee-message')
    message.classList.toggle('hidden', !document.querySelector('input#meter-nee').checked);
}

function setupClickEvent(elementId, func) {
    document.querySelector(`input#${elementId}`).addEventListener('click', func );
}

window.addEventListener('load', () => {
    setupClickEvent('hulp', toggleHelpInput);
    setupClickEvent('ik-weet' , toggleHelpInput);
    setupClickEvent('zonnepanelen',toggleSunPannel);
    setupClickEvent('meter-nee', toggleNeeMessage);
    setupClickEvent('meter-ja', toggleNeeMessage);
});