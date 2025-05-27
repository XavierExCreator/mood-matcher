//Adding three variables in order to put them in the if/else if/else functions later
var output = ``;
var imgAlt = ``;
var imgSrc = "" ;

//Grabbing the form,the div and the divs children from HTML to use/save
const endResult = document.querySelector(".endResult");
const moodForm = document.querySelector("#moodForm");

//Changing the variable 'imgSrc' to an elment in order to use in the JS,
//This variable will become an image tag for HTML to put the images in for the form
imgSrc = document.createElement("img");

//Making an eventListener for the function "onFormSubmit" to 'listen' for a submit before running
moodForm.addEventListener("submit", onFormSubmit);

//The function "onFormSubmit" will have:
//A prevent default
//A data and dataObject to save the users information for the form outcome
//A variable for the users mood for the if/else if/else function
//A variable for the note of the user for the if/else if/else function
//Adding an outcome for what JS should show the user based on their emotions using output/imgAlt/imgSrc
//Adding a error prompt for console.log in case the if/else if/else function is not working
//The JS will show the output and imgAlt messages after the function processes the users data
//The JS will connect the imgSrc to the body of the HTML, so that the image can pop up after the user clicks the 'submit' button
//Lastly adding a reset function at the end inside the function "onFormSubmit"

function onFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(moodForm);
  const dataObject = Object.fromEntries(data.entries());

  let mood = dataObject.moodChoice;
  let note = dataObject.moodWhy;

  if (mood === "happy") {
    output = `Everyone deserves to be happy, glad you are!`;
    imgAlt = `Because you said: ${note}`;
    imgSrc.src = "images/happy.png";
  } else if (mood === "sad") {
    output = `I'm sorry to hear that, you're not alone`;
    imgAlt = `Because you said: ${note}`;
    imgSrc.src = "images/sad.png";
  } else if (mood === "calm") {
    output = `What a great mood to have, let's take a few deep breaths!`;
    imgAlt = `Because you said: ${note}`;
    imgSrc.src = "images/calm.png";
  } else {
    console.log("this ain't working");
  }
    endResult.textContent = output + imgAlt;
    document.body.appendChild(imgSrc);

  moodForm.reset();
}

