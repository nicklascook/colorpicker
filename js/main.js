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

function appendPaletteCard(primCol, secCol, shadeCol, accentCol){ // Takes each of the necessary colours and generates a palette card
  // Create the wrapper, class of 'cardwrapper'
  var paletteWrapper = document.createElement('div');
  paletteWrapper.classList.add("cardwrapper");

  // create the card, class of 'card', add as child of wrapper
  var paletteCard = document.createElement('div');
  paletteCard.classList.add("card");
  paletteWrapper.appendChild(paletteCard);

  // Create primary, secondary, shades 1 and 2
  var palettePrimary = document.createElement('div');
  palettePrimary.classList.add("primarycolor");
  palettePrimary.style.backgroundColor = primCol; // Change background color to primCol
  paletteCard.appendChild(palettePrimary);
  var paletteSecondary = document.createElement('div');
  paletteSecondary.classList.add("secondarycolor");
  paletteSecondary.style.backgroundColor = secCol; // Change background color to secCol
  paletteCard.appendChild(paletteSecondary);
  var paletteShade = document.createElement('div');
  paletteShade.classList.add("shadecolor");
  paletteShade.style.backgroundColor = shadeCol; // Change background color to shadeCol
  paletteCard.appendChild(paletteShade);
  var paletteAccent = document.createElement('div');
  paletteAccent.classList.add("shadecolor2");
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
    "secCol": "#e3e3e3",
    "shadeCol": "#89bdd3",
    "accentCol": "#9ad3de"
  },
  {
    "primCol": "#dddfd4",
    "secCol": "#fae596",
    "shadeCol": "#173e43",
    "accentCol": "#3fb0ac"
  },
  {
    "primCol": "#feffff",
    "secCol": "#98dafc",
    "shadeCol": "#312c32",
    "accentCol": "#daad86"
  },
  {
    "primCol": "#6534ff",
    "secCol": "#62bcfa",
    "shadeCol": "#bbc4ef",
    "accentCol": "#fccdd3"
  },
  {
    "primCol": "#e6af4b",
    "secCol": "#e05038",
    "shadeCol": "#334431",
    "accentCol": "#f2cbbc"
  },
  {
    "primCol": "#252839",
    "secCol": "#677077",
    "shadeCol": "#f2b632",
    "accentCol": "#b5b5b7"
  },
]
function createPaletteCards(){
  for(i=0; i<paletteSchemes.length; i++){
    console.log(i);
    appendPaletteCard(paletteSchemes[i].primCol, paletteSchemes[i].secCol,paletteSchemes[i].shadeCol, paletteSchemes[i].accentCol)
  }
}




createPaletteCards();

// ========================================== /Palette Cards ===============================================================
