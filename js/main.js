// ========================================== DROP DOWN BUTTONS ===============================================================

// show dropdown on themes button
var themesbutton = document.getElementById("themesbtn");
themesbutton.onclick= function(event){
  var dropdown = document.getElementById("themesdropdown");
  themesbutton.classList.toggle("activebtn");
  dropdown.style.display = "inline-block";

  if (themesbutton.classList.contains("activebtn") === false){ // if button is currently not selected
    document.body.addEventListener("click", function () { // if user clicks anywhere that is not the button
        dropdown.style.display = "none";
        themesbutton.classList.remove("activebtn");
    }, false);
    themesbutton.addEventListener("click", function (ev) {
      themesbutton.classList.toggle("activebtn");
        ev.stopPropagation();
    }, false);
  };
};

// show dropdown on type button
var typebutton = document.getElementById("typebtn");
typebutton.onclick= function(event){
  var dropdown = document.getElementById("typedropdown");
  typebutton.classList.toggle("activebtn");
  dropdown.style.display = "inline-block";

  if (typebutton.classList.contains("activebtn") === false){ // if button is currently not selected
    document.body.addEventListener("click", function () { // if user clicks anywhere that is not the button
        dropdown.style.display = "none";
        typebutton.classList.remove("activebtn");
    }, false);
    typebutton.addEventListener("click", function (ev) {
      typebutton.classList.toggle("activebtn");
        ev.stopPropagation();
    }, false);
  };
};
// ========================================== /DROP DOWN BUTTONS ===============================================================

// ========================================== Palette Cards ===============================================================

function appendPaletteCard(primCol, darkPrimCol, lightPrimCol, accentCol, tagName){ // Takes each of the necessary colours and generates a palette card
  // Create the wrapper, class of 'cardwrapper'
  var paletteWrapper = document.createElement('div');
  paletteWrapper.classList.add("cardwrapper");

  // create the card, class of 'card', add as child of wrapper
  var paletteCard = document.createElement('div');
  paletteCard.classList.add("card");
  paletteWrapper.appendChild(paletteCard);

  // Add the top wrapper:
  var topWrapper = document.createElement('div');
  topWrapper.classList.add("topwrapper");
  paletteCard.appendChild(topWrapper);
  // Add the tags:
  var tag = document.createElement('div');
  tag.classList.add("tag");
  tag.innerHTML = tagName;
  topWrapper.appendChild(tag);
  // Add the upvote button
  var upvote = document.createElement('div');
  upvote.classList.add("upvote");
  var upvoteIcon = document.createElement('span');
  upvoteIcon.classList.add("icon-favorite");
  upvote.appendChild(upvoteIcon);
  topWrapper.appendChild(upvote);


  // Create primary, secondary, shades 1 and 2
  var palettePrimary = document.createElement('div');
  palettePrimary.classList.add("primarycolor");
  palettePrimary.style.backgroundColor = primCol; // Change background color to primCol
  paletteCard.appendChild(palettePrimary);
  var paletteSecondary = document.createElement('div');
  paletteSecondary.classList.add("darkprimarycolor");
  paletteSecondary.style.backgroundColor = darkPrimCol; // Change background color to darkPrimCol
  paletteCard.appendChild(paletteSecondary);
  var paletteShade = document.createElement('div');
  paletteShade.classList.add("lightprimarycolor");
  paletteShade.style.backgroundColor = lightPrimCol; // Change background color to lightPrimCol
  paletteCard.appendChild(paletteShade);
  var paletteAccent = document.createElement('div');
  paletteAccent.classList.add("accentcolor");
  paletteAccent.style.backgroundColor = accentCol; // Change background color to accentCol
  paletteCard.appendChild(paletteAccent);
  document.getElementById("cardrow").appendChild(paletteWrapper);
}


// Function that iterates over an array full of objects that each define a 'palette card'
// this function then runs appendPaletteCard() with the variables taken from the object
// in order to filter this, simply change the accepted array to a new array post-filter
var paletteSchemes = [
  {
    "primCol": "#c9c9c9",
    "darkPrimCol": "#e3e3e3",
    "lightPrimCol": "#89bdd3",
    "accentCol": "#9ad3de",
    "tag": "material"
  },
  {
    "primCol": "#dddfd4",
    "darkPrimCol": "#fae596",
    "lightPrimCol": "#173e43",
    "accentCol": "#3fb0ac",
    "tag": "material"
  },
  {
    "primCol": "#feffff",
    "darkPrimCol": "#98dafc",
    "lightPrimCol": "#312c32",
    "accentCol": "#daad86",
    "tag": "material"
  },
  {
    "primCol": "#6534ff",
    "darkPrimCol": "#62bcfa",
    "lightPrimCol": "#bbc4ef",
    "accentCol": "#fccdd3",
    "tag": "material"
  },
  {
    "primCol": "#e6af4b",
    "darkPrimCol": "#e05038",
    "lightPrimCol": "#334431",
    "accentCol": "#f2cbbc",
    "tag": "material"
  },
  {
    "primCol": "#252839",
    "darkPrimCol": "#677077",
    "lightPrimCol": "#f2b632",
    "accentCol": "#b5b5b7",
    "tag": "material"
  },
]
function createPaletteCards(){
  for(i=0; i<paletteSchemes.length; i++){
    appendPaletteCard(paletteSchemes[i].primCol, paletteSchemes[i].darkPrimCol,paletteSchemes[i].lightPrimCol, paletteSchemes[i].accentCol, paletteSchemes[i].tag)
  }
}




createPaletteCards();

// ========================================== /Palette Cards ===============================================================
