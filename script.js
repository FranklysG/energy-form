function hidden() {
    const stepTwo = document.querySelector("#step-two");
    const stepThree = document.querySelector("#step-three");
}

hidden()

function prevOne() {
    const stepOne = document.querySelector("#step-one");
    const stepTwo = document.querySelector("#step-two");
    const stepThree = document.querySelector("#step-three");

    stepOne.style.display = "";
    stepTwo.style.display = "none";
    stepThree.style.display = "none";
}

function nextTwo() {
    const stepOne = document.querySelector("#step-one");
    const stepTwo = document.querySelector("#step-two");
    const stepThree = document.querySelector("#step-three");

    stepOne.style.display = "none";
    stepTwo.style.display = "";
    stepThree.style.display = "none";
}

function prevTwo() {
    const stepOne = document.querySelector("#step-one");
    const stepTwo = document.querySelector("#step-two");
    const stepThree = document.querySelector("#step-three");

    stepOne.style.display = "none";
    stepTwo.style.display = "";
    stepThree.style.display = "none";
}

function nextThree() {
    const stepOne = document.querySelector("#step-one");
    const stepTwo = document.querySelector("#step-two");
    const stepThree = document.querySelector("#step-three");

    stepOne.style.display = "none";
    stepTwo.style.display = "none";
    stepThree.style.display = "";
}