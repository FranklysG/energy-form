const removeStepActive = (idx) => {
    const steps = document.querySelectorAll(".steps li");
    const step = steps[idx];
  
    step.classList.remove("active", "text-[#87C232]", "dark:text-[#87C232]", "after:border-[#87C232]", "dark:after:border-[#87C232]");
    step.classList.add("text-[#1E2329]");
  
    const stepSpan = step.querySelector("span");
    stepSpan.classList.remove("bg-[#87C232]");
    stepSpan.classList.add("bg-[#1E2329]");
  
    const stepParagraph = step.querySelector("p");
    stepParagraph.classList.remove("text-[#87C232]");
};

 
const activateStep = (idx) => {
    const stepSpan = document.querySelectorAll(".steps li.active span");
    const stepParagraph = document.querySelectorAll(".steps li.active p");
  
    stepSpan[idx].classList.remove("bg-[#1E2329]")
    stepSpan[idx].classList.add("bg-[#87C232]", "text-white")
    stepParagraph[idx].classList.add("text-[#87C232]")  
}


function prevOne() {
  const stepOne = document.querySelector(".step-one");
  const stepTwo = document.querySelector(".step-two");

  stepOne.classList.remove("hidden");
  stepTwo.classList.add("hidden");
  removeStepActive(1)  
}

function nextTwo() {
  const stepOne = document.querySelector(".step-one");
  const stepTwo = document.querySelector(".step-two");
  const steps = document.querySelectorAll(".steps li");

  stepOne.classList.add("hidden");
  stepTwo.classList.remove("hidden");
  steps[1].classList.add("active", "text-[#87C232]", "dark:text-[#87C232]", "after:border-[#87C232]", "dark:after:border-[#87C232]");
  
  activateStep(1)
}

function prevTwo() {
  const stepOne = document.querySelector(".step-one");
  const stepTwo = document.querySelector(".step-two");
  const stepThree = document.querySelector(".step-three");

  stepOne.classList.add("hidden");
  stepTwo.classList.remove("hidden");
  stepThree.classList.add("hidden");
  removeStepActive(2)  
}

function nextThree() {
  const stepOne = document.querySelector(".step-one");
  const stepTwo = document.querySelector(".step-two");
  const stepThree = document.querySelector(".step-three");
  const steps = document.querySelectorAll(".steps li");

  stepOne.classList.add("hidden");
  stepTwo.classList.add("hidden");
  stepThree.classList.remove("hidden");
  steps[2].classList.add("active" , "text-[#87C232]", "dark:text-[#87C232]", "after:border-[#87C232]", "dark:after:border-[#87C232]");
    
  activateStep(2)
}

function setCardActive(el) {
    const container = el.parentNode.parentNode;
  
    container.querySelectorAll(".card").forEach((items) => {
      items.classList.remove("text-white", "bg-[#1E2329]", "after:bg-[#87C232]", "active");
      items.classList.add("bg-[#f8f8f8]", "text-[#1E2329]", "after:bg-[#f8f8f8]");
    });
  
    const parentClassList = el.parentNode.classList;
    parentClassList.remove("bg-[#f8f8f8]", "text-[#1E2329]", "after:bg-[#f8f8f8]");
    parentClassList.add("text-white", "bg-[#1E2329]", "after:bg-[#87C232]", "active");
}


function toggleHelpInput() {
  const helpOptions = document.querySelector(".help-options");
  helpOptions.classList.toggle(
    "hidden",
    !document.querySelector("input#hulp").checked
  );
}

function toggleSunPannel() {
  const pannelField = document.querySelector(".zonnepanelen-field");
  pannelField.classList.toggle(
    "hidden",
    !document.querySelector("input#zonnepanelen").checked
  );
}

function toggleNeeMessage() {
  const message = document.querySelector(".nee-message");
  message.classList.toggle(
    "hidden",
    !document.querySelector("input#meter-nee").checked
  );
}

function setupClickEvent(elementId, func) {
  document.querySelector(`input#${elementId}`).addEventListener("click", func);
}

window.addEventListener("load", () => {
  setupClickEvent("hulp", toggleHelpInput);
  setupClickEvent("ik-weet", toggleHelpInput);
  setupClickEvent("zonnepanelen", toggleSunPannel);
  setupClickEvent("meter-nee", toggleNeeMessage);
  setupClickEvent("meter-ja", toggleNeeMessage);
});
