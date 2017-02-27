// ========================================== MENU FILTER BUTTONS ===============================================================

var materialBtn = document.getElementById("materialbtn");
var monochromeBtn = document.getElementById("monochromebtn");

materialBtn.onclick= function(event){
  reloadCardsFiltered("material");
};

monochromeBtn.onclick= function(event){
  reloadCardsFiltered("monochrome");
};


// ========================================== /MENU FILTER BUTTONS ===============================================================
//FADE IN animation
function fadeIn(el) {
  el.style.opacity = 0;

  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.04;


    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}
// Fade Out animation
function fadeOut(el) {
  el.style.opacity = 1;

  var tick = function() {
    el.style.opacity = +el.style.opacity - 0.04;


    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

// ========================================== Palette Cards ===============================================================

function appendPaletteCard(primCol, darkPrimCol, lightPrimCol, accentCol, tagName){ // Takes each of the necessary colours and generates a palette card
  // Create the wrapper, class of 'cardwrapper'
  var paletteWrapper = document.createElement('div');
  paletteWrapper.classList.add("cardwrapper");

  // create the card, class of 'card', add as child of wrapper
  var paletteCard = document.createElement('div');
  paletteCard.classList.add("card");
  paletteCard.id = "card";
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
  upvoteIcon.classList.add("icon-content_copy");
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
    "primCol": "#fff",
    "darkPrimCol": "#fff",
    "lightPrimCol": "#fff",
    "accentCol": "#fff",
    "tag": "custom color scheme"
  },
  {
    "primCol": "#F44336",
    "darkPrimCol": "#D32F2F",
    "lightPrimCol": "#E57373",
    "accentCol": "#FFC400",
    "tag": "material"
  },
  {
    "primCol": "#2196F3",
    "darkPrimCol": "#1565C0",
    "lightPrimCol": "#64B5F6",
    "accentCol": "#64FFDA",
    "tag": "material"
  },
  {
    "primCol": "#8BC34A",
    "darkPrimCol": "#689F38",
    "lightPrimCol": "#AED581",
    "accentCol": "#FFEA00",
    "tag": "material"
  },
  {
    "primCol": "#FF5722",
    "darkPrimCol": "#D84315",
    "lightPrimCol": "#FF8A65",
    "accentCol": "#B0BEC5",
    "tag": "material"
  },
  {
    "primCol": "#607D8B",
    "darkPrimCol": "#455A64",
    "lightPrimCol": "#B0BEC5",
    "accentCol": "#8C9EFF",
    "tag": "material"
  },
  {
    "primCol": "#673AB7",
    "darkPrimCol": "#512DA8",
    "lightPrimCol": "#9575CD",
    "accentCol": "#EEFF41",
    "tag": "material"
  },
  {
    "primCol": "#009688",
    "darkPrimCol": "#00796B",
    "lightPrimCol": "#4DB6AC",
    "accentCol": "#FFC400",
    "tag": "material"
  },
  {
    "primCol": "#EF4836",
    "darkPrimCol": "#6F2219",
    "lightPrimCol": "#F28A7F",
    "accentCol": "#BC392A",
    "tag": "monochrome"
  },
  {
    "primCol": "#D2527F",
    "darkPrimCol": "#522032",
    "lightPrimCol": "#D996AE",
    "accentCol": "#9F3E60",
    "tag": "monochrome"
  },
  {
    "primCol": "#8E44AD",
    "darkPrimCol": "#CD62F9",
    "lightPrimCol": "#AA81BB",
    "accentCol": "#E3ADF9",
    "tag": "monochrome"
  },
  {
    "primCol": "#89C4F4",
    "darkPrimCol": "#415E74",
    "lightPrimCol": "#D4E7F6",
    "accentCol": "#6C9BC1",
    "tag": "monochrome"
  },
  {
    "primCol": "#446CB3",
    "darkPrimCol": "#141F33",
    "lightPrimCol": "#8298C0",
    "accentCol": "#314D80",
    "tag": "monochrome"
  },
  {
    "primCol": "#26A65B",
    "darkPrimCol": "#35E87F",
    "lightPrimCol": "#60B583",
    "accentCol": "#7BE8A8",
    "tag": "monochrome"
  },
  {
    "primCol": "#C8F7C5",
    "darkPrimCol": "#61775F",
    "lightPrimCol": "#83F87B",
    "accentCol": "#3F773B",
    "tag": "monochrome"
  },
  {
    "primCol": "#F7CA18",
    "darkPrimCol": "#77620C",
    "lightPrimCol": "#F8DA63",
    "accentCol": "#C4A013",
    "tag": "monochrome"
  },
  {
    "primCol": "#F89406",
    "darkPrimCol": "#784803",
    "lightPrimCol": "#F9B451",
    "accentCol": "#C57605",
    "tag": "monochrome"
  },
  {
    "primCol": "#95A5A6",
    "darkPrimCol": "#677273",
    "lightPrimCol": "#6CB1B5",
    "accentCol": "#DAF1F2",
    "tag": "monochrome"
  },
]
function createPaletteCards(){
  for(i=0; i<paletteSchemes.length; i++){
    appendPaletteCard(paletteSchemes[i].primCol, paletteSchemes[i].darkPrimCol,paletteSchemes[i].lightPrimCol, paletteSchemes[i].accentCol, paletteSchemes[i].tag)
  }
}




createPaletteCards();

// Scroll Buttons Functionality:
// variable set up
var leftScroll = document.getElementById("left-scroll");
var rightScroll = document.getElementById("right-scroll");
var cardRow = document.getElementById("cardrow");
// scroll counter to control how far it is possible to scroll
var scrollCounter = 0;
var maxScroll = (document.getElementsByClassName("card").length - 5 ) * 288;



rightScroll.onclick =(function(event){
  // animate the scroll
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 30);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 40);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 50);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 60);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 70);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 80);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 90);
  setTimeout(function(){scrollCounter += 40; cardRow.scrollLeft = scrollCounter;}, 100);
  if (scrollCounter > maxScroll){ // to prevent the scroll counter becoming larger than leftScroll max amount
    scrollCounter = maxScroll;
  }

});

leftScroll.onclick =(function(event){
  if (scrollCounter > maxScroll){ // to prevent the scroll counter becoming larger than leftScroll max amount
    scrollCounter = maxScroll;
  }
  if (scrollCounter == 0){
    scrollCounter = cardRow.scrollLeft;
  }
  // prevent scroll counter from becoming less than 0
  if (scrollCounter > 0){
    // animate the scroll
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 30);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 40);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 50);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 60);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 70);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 80);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 90);
    setTimeout(function(){scrollCounter -= 40; cardRow.scrollLeft = scrollCounter;}, 100);
  };
});

// onclick function for palette Cards
// Define card array
var cards = document.getElementsByClassName("card");
function cardsOnclickListener(){
  // Loop through array to listen to all cards
    for (var h=0; h<cards.length; h++){
      cards[h].addEventListener('click', function(e) {
      var selectedCard = e.target;
      // if loop that iterates through the e.target and makes sure selectedCard = div.card#card
      if (e.target.id == "card"){
      }else if (selectedCard.classList.contains("icon-favorite")) {
        selectedCard = selectedCard.parentElement.parentElement.parentElement;
      }else if (selectedCard.classList.contains("tag")) {
        selectedCard = selectedCard.parentElement.parentElement;
      }else{
        selectedCard = selectedCard.parentElement;
      };
      // create a variable from the selectedCard element's divs(prim, dark, light, accent)
      var coloursOfPalette = [];
      for (var k=1;k<5;k++){
        coloursOfPalette.push(selectedCard.childNodes[k].style.backgroundColor);

      }
      // pass this through previewColorChange
      previewColorChange(coloursOfPalette[0],coloursOfPalette[1],coloursOfPalette[2],coloursOfPalette[3]);
      });
    };
}
cardsOnclickListener();


// // hover animation for palette cards:
// for (var k=0; k<cards.length; k++){
//   cards[k].addEventListener('mouseover', function(e) {
//     this.classList.add("cardhover");
//   });
//   cards[k].addEventListener('mouseout', function(e) {
//     this.classList.remove("cardhover");
//   });
// };


// target the custom color scheme card and Functionality
var customCard = document.getElementsByClassName("cardwrapper")[0];
customCard.children[0].classList.add("testcard");
customCard.children[0].children[0].id = "testtopwrapper";
customCard.children[0].children[0].children[0].classList.remove("tag");
customCard.children[0].children[0].children[0].classList.add("cardtitle");
customCard.children[0].children[0].removeChild(document.getElementsByClassName("upvote")[0]);

console.log();


// ========================================== /Palette Cards ===============================================================

// ========================================== PREVIEW PAGE ===============================================================

// palette card onclick function -> returns an array of the object's colors -> function that takes 4 colors and injects them onto the preview page

function previewColorChange(prim, dark, light, accent){ // Changes the color scheme of the preview website from the colors given
  var preview = document.getElementsByClassName("preview")[0];
  // top header bgc and border
  preview.style.backgroundColor = prim;
  preview.style.borderColor = dark;
  //title color
  preview.children[0].children[0].children[0].style.color = "#fff";
  // nav color
  preview.children[0].children[1].children[0].children[0].style.color = accent;
  // landing page h1
  preview.children[1].children[0].children[0].style.color = light;
  // button colors
  for(i=3; i<6;i++){
    preview.children[1].children[0].children[i].children[0].style.color = dark;
  };
  // highlighted word span
  preview.children[2].children[0].children[1].children[0].style.color = dark;
  // call to action button
  var callToActionBtn = preview.children[2].children[0].children[2].children[0];
  callToActionBtn.style.color = accent;
  callToActionBtn.style.borderColor = accent;
  callToActionBtn.onmouseover = function() {
    this.style.backgroundColor = prim;
  };
  callToActionBtn.onmouseout = function() {
    this.style.backgroundColor = "#fff";
  };
  // contact us section
  preview.children[2].children[1].children[2].children[0].style.color = dark;
  preview.children[2].children[1].children[3].children[0].children[0].style.color = dark;
  preview.children[2].children[1].children[3].children[1].children[0].style.color = dark;
  // marketing box logos
  for(i=0; i<4; i++){
    preview.children[4].children[i].children[0].style.color = dark;
  };
}



// ========================================== /PREVIEW PAGE ===============================================================



// #00 00 ff = rgb(0,0,255) ratio of x,y,z to establish dominant warm / cold / dark

// removes all current cards and only shows cards that have the same tag as the filter variable
function reloadCardsFiltered(filter){
  var removeArray = document.getElementById("cardrow").children;
  var numberCards = removeArray.length -1;
  for(var m=2; m<numberCards ;m++){
    removeArray[3].remove();
  }
  var filterThroughArray = paletteSchemes;
  for(var b=1; b<filterThroughArray.length;b++){
    if(filterThroughArray[b].tag == filter){
      appendPaletteCard(filterThroughArray[b].primCol, filterThroughArray[b].darkPrimCol, filterThroughArray[b].lightPrimCol, filterThroughArray[b].accentCol, filterThroughArray[b].tag);
    }
  }
  cards = document.getElementsByClassName("card");
  cardsOnclickListener();

}

// open preview settings and Functionality
var previewBtn = document.getElementById("previewbtn");
previewBtn.onclick =(function(event){
  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
  fadeIn(modal);


    document.getElementsByClassName("modal")[0].addEventListener("click", function () { // if user clicks anywhere that is not the button
        document.getElementsByClassName("modal")[0].style.display = "none";
    }, false);
    document.getElementsByClassName("modalcontent")[0].addEventListener("click", function (ev) {
        ev.stopPropagation();
    }, false);

});


// Load in Google Font:

function addGoogleFont(fontName){
  // target head
  var head = document.getElementsByTagName("head")[0];
  // create a link element
  var link = document.createElement('link');
  // insert fontname into url
  link.href = "https://fonts.googleapis.com/css?family=" + fontName;
  link.rel = "stylesheet";
  // change preview to have new font
  document.getElementsByClassName("preview")[0].style.fontFamily = fontName + ", sans-serif";
  document.getElementsByClassName("previewheader")[0].style.fontFamily = fontName + ", sans-serif";
}

// suggest text for clarification on form focus
var fontFormField = document.getElementById("font");
fontFormField.onclick = function(event){
  var fontSuggest = document.getElementsByClassName("fontsuggest")[0];
  // fade in text if not already visible
  if (fontSuggest.style.opacity == 0){
    fadeIn(fontSuggest);
  } else {
  }
  // check after 5 seconds if active element is no longer form field, fade out
  setTimeout(function () {
    if (document.activeElement != fontFormField){
      fadeOut(fontSuggest);}
    }, 5000);
  // check if any input is given, if so, run function for import button to appear
  checkForInput("font");
}

function checkForInput(id){
  var check = document.getElementById(id);
  if (check.value.length == 0){
    setTimeout(function () {
      checkForInput(id);
    }, 1000);
  } else{
    fadeOut(document.getElementsByClassName("fontsuggest")[0]);
    setTimeout(function () {
      document.getElementsByClassName("fontsuggest")[0].style.display = "none";
      document.getElementsByClassName("submitfont")[0].style.display = "block";
      fadeIn(document.getElementsByClassName("submitfont")[0]);
    }, 600);
  }
}

// import button Functionality
var importFontBtn = document.getElementsByClassName("submitfont")[0];
importFontBtn.onclick = function(event){
  var fontInput = document.getElementById("font").value;
  addGoogleFont(fontInput);
}
