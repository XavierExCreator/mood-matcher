//Adding three variables in order to put them in the if/else if/else functions later
let output = ``;
let imgAlt = ``;
let imgSrc = "" ;

//Grabbing the formId, formClass and div of message(endResult) from HTML to use/save
const endResult = document.querySelector(".endResult");
const moodForm = document.querySelector("#moodForm");
const formGroup = document.querySelector(".formGroup");
//Making an img tag to place the image inside
let img = document.createElement("img");

//Making a header2 for part one of the output
let h2 = document.createElement("h2");

//Making a paragraph tag for part two of the output
let p = document.createElement("p");

//Making an eventListener for the function "onFormSubmit" to 'listen' for a submit before running
moodForm.addEventListener("submit", onFormSubmit);

//The function "onFormSubmit" will have on the first few lines:
//A prevent default
//A data and dataObject to save the users information for the form outcome
//A variable for the users mood for the if/else if/else function
//A variable for the note of the user for the if/else if/else function
function onFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(moodForm);
  const dataObject = Object.fromEntries(data.entries());

  let mood = dataObject.moodChoice;
  let note = dataObject.moodWhy;

  //if/else if/else statements will change four variables depending on the outcomes for the form:
  //The variables that'll change based on 'mood' are: h2, p, imgAlt and imgSrc.
  //The outcomes change when the user click: happy, sad or calm. 
  if (mood === "happy") {
    h2.textContent = `Everyone deserves to be happy, glad you are!`; 
    p.textContent = `Because you said: ${note}`;
    imgAlt = `An illustrated yellow happy face`;
    imgSrc = "images/happy.png";
    formGroup.classList.add("happyOutcome"); //changes form style to mood
  } else if (mood === "sad") {
    h2.textContent = `I'm sorry to hear that, you're not alone.`;
    p.textContent = `Because you said: ${note}`;
    imgAlt = `An illustrated yellow face that is sad with frowned brows/lips and eyes closed`;
    imgSrc = "images/sad.png";
    formGroup.classList.add("sadOutcome"); //changes form style to mood
  } else if (mood === "calm") {
    h2.textContent = `What a great mood to have, let's take a few deep breaths!`;
    p.textContent = `Because you said: ${note}`;
    imgAlt = `An illustrated pale yellow face that has a calm expression with a smile raised brows and eyes closed`;
    imgSrc = "images/calm.png";
    formGroup.classList.add("calmOutcome"); //changes form style to mood
  } else {
    console.log("this ain't working"); //else statement for bugs to show if it breaks
  }
     output.textContent = h2 + p; //Making the variables h2 and p the textContent for the output variable
     img.src = imgSrc; //combining imgSrc to img src location
     img.alt = imgAlt; //combining imgAlt to img alt text
    endResult.textContent = output; //using the variable output as the textContent for the endResult in HTML
    document.body.appendChild(h2); //apending h2 to body of HTML
    document.body.appendChild(p); //apending p to body of HTML
    document.body.appendChild(img); //apending img to body of HTML

  moodForm.reset(); //Making sure the form resets
}

