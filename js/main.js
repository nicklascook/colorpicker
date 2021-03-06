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
    "tag": "create new color scheme"
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



// target the custom color scheme card and Functionality
var customCard = document.getElementsByClassName("cardwrapper")[0];
  customCard.children[0].classList.add("testcard");
  customCard.children[0].children[0].id = "testtopwrapper";
  customCard.children[0].children[0].children[0].classList.remove("tag");
  customCard.children[0].children[0].children[0].classList.add("cardtitle");
  customCard.children[0].children[0].removeChild(document.getElementsByClassName("upvote")[0]);



// ========================================== /Palette Cards ===============================================================

// ========================================== PREVIEW PAGE ===============================================================

// palette card onclick function -> returns an array of the object's colors -> function that takes 4 colors and injects them onto the preview page

// set up the displays so that javascript can recognise them
document.getElementsByClassName("preview")[0].style.display = "none";
document.getElementsByClassName("blogpreview")[0].style.display = "block";
document.getElementsByClassName("storepreview")[0].style.display = "none";

// store the currently active color scheme so that it remains the same when changing sites
var currentlyActiveColors = {
  "prim": "#03A9F4",
  "dark": "#0288D1",
  "light": "#4FC3F7",
  "accent": "#7C4DFF"
}

function previewColorChange(prim, dark, light, accent){ // Changes the color scheme of the preview website from the colors given
  // how it works: checks which preview site is currently loaded, runs function that relates to that site with the colors given

  // check which page is currently loaded
  if(document.getElementsByClassName("preview")[0].style.display == "block"){
    businessPreviewColorInject(prim, dark, light, accent);
  } else if (document.getElementsByClassName("blogpreview")[0].style.display == "block") {
    blogPreviewColorInject(prim, dark, light, accent);
  } else if (document.getElementsByClassName("storepreview")[0].style.display == "block") {
    storePreviewColorInject(prim, dark, light, accent);
  }

  // update the currently active colors object
  currentlyActiveColors.prim = prim;
  currentlyActiveColors.dark = dark;
  currentlyActiveColors.light = light;
  currentlyActiveColors.accent = accent;


}
function businessPreviewColorInject(prim, dark, light, accent){
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
function blogPreviewColorInject(prim, dark, light, accent){
  var preview = document.getElementsByClassName("blogpreview")[0];
  // header
  preview.children[0].children[0].children[0].style.color = dark;
  preview.children[0].children[0].children[0].onmouseover = function(){
    this.style.color= light;
  }
  preview.children[0].children[0].children[0].onmouseout = function(){
    this.style.color= dark;
  }
  // nav
  preview.children[1].style.backgroundColor = prim;

  //left col --------
  preview.children[2].children[0].children[1].style.borderColor = accent;
    // first story
  preview.children[2].children[0].children[2].onmouseover=function(){
    this.children[1].style.color = prim;
  }
  preview.children[2].children[0].children[2].onmouseout=function(){
    this.children[1].style.color = "black";
  }
    // second story
    preview.children[2].children[0].children[3].onmouseover=function(){
      this.children[1].style.color = prim;
    }
    preview.children[2].children[0].children[3].onmouseout=function(){
      this.children[1].style.color = "black";
    }
    // third story
    preview.children[2].children[0].children[4].onmouseover=function(){
      this.children[1].style.color = prim;
    }
    preview.children[2].children[0].children[4].onmouseout=function(){
      this.children[1].style.color = "black";
    }
    preview.children[2].children[1].children[0].children[3].style.color = accent;
    preview.children[2].children[1].children[0].children[4].style.borderColor = accent;

  //centre col ----------
    //main story
  preview.children[2].children[1].children[0].onmouseover = function(){
    this.children[1].style.color = prim;
  }
  preview.children[2].children[1].children[0].onmouseout = function(){
    this.children[1].style.color = "black";
  }
  preview.children[2].children[1].children[0]

    //secondary story 1
  preview.children[2].children[1].children[1].onmouseover = function(){
    this.children[1].style.color = prim;
  }
  preview.children[2].children[1].children[1].onmouseout = function(){
    this.children[1].style.color = "black";
  }
  preview.children[2].children[1].children[1].children[2].style.color = accent;

    //secondary story 2
  preview.children[2].children[1].children[2].onmouseover = function(){
    this.children[1].style.color = prim;
  }
  preview.children[2].children[1].children[2].onmouseout = function(){
    this.children[1].style.color = "black";
  }
  preview.children[2].children[1].children[2].children[2].style.color = accent;

  //right col ------------
  preview.children[2].children[2].children[1].style.borderColor = accent;
    //target every newsstory
    var newsStory =   document.getElementsByClassName("newsstory");
    for (var i=0; i<newsStory.length;i++){
      //change hover behaviour
      newsStory[i].children[0].onmouseover = function(){
        this.style.color = prim;
      };
      newsStory[i].children[0].onmouseout = function(){
        this.style.color = "black";
      }
      // change accent text
      newsStory[i].children[1].style.color = accent;
      //change hr
      newsStory[i].children[3].style.borderColor = accent;
    }
}
function storePreviewColorInject(prim, dark, light, accent){
  var preview = document.getElementsByClassName("storepreview")[0];
  // top nav
  preview.children[0].style.backgroundColor = prim;
  // top header
  preview.children[1].style.backgroundColor = prim;
  // style feed
  var styleFeed = document.getElementsByClassName("store-stylefeed-grid");
  for(var i=0; i<styleFeed.length;i++){
      styleFeed[i].children[1].style.color = light;
  }
  // store-body
  var storeGrid = document.getElementsByClassName("store-grid");
  for(var i=0; i<storeGrid.length;i++){
    storeGrid[i].onmouseover = function(){
      this.children[0].style.borderColor = accent;
      this.children[1].style.color = accent;
    }
    storeGrid[i].onmouseout = function(){
      this.children[0].style.borderColor = "black";
      this.children[1].style.color = "black";
    }}
  // store footer
  preview.children[4].style.backgroundColor = prim;
  var socialMediaIcons = preview.children[4].children[0].children[0].children;
  socialMediaIcons[1].onmouseover = function(){
    this.style.color = accent;
  }
  socialMediaIcons[1].onmouseout = function(){
    this.style.color = "black";
  }
  socialMediaIcons[2].onmouseover = function(){
    this.style.color = accent;
  }
  socialMediaIcons[2].onmouseout = function(){
    this.style.color = "black";
  }
  socialMediaIcons[3].onmouseover = function(){
    this.style.color = accent;
  }
  socialMediaIcons[3].onmouseout = function(){
    this.style.color = "black";
  }
  for(var i =1; i<6;i++){
    preview.children[4].children[i].onmouseover = function(){
      this.style.color = accent;
    }
    preview.children[4].children[i].onmouseout = function(){
      this.style.color = "black";
    }
  }

}


// ========================================== /PREVIEW PAGE ===============================================================

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

//Change preview website functionality:
//clicking on one option sets display:none for other 2,
// also uses the currentlyActiveColors object to keep the color scheme
//Blog
var blogBtn = document.getElementById("blogpreview");
blogBtn.onclick = (function(event){
  document.getElementsByClassName("blogpreview")[0].style.display = "block";
  document.getElementsByClassName("preview")[0].style.display = "none";
  document.getElementsByClassName("storepreview")[0].style.display = "none";
  previewColorChange(currentlyActiveColors.prim, currentlyActiveColors.dark, currentlyActiveColors.light, currentlyActiveColors.accent);
});
// Business
var businessBtn = document.getElementById("businesspreview");
businessBtn.onclick = (function(event){
  document.getElementsByClassName("preview")[0].style.display = "block";
  document.getElementsByClassName("blogpreview")[0].style.display = "none";
  document.getElementsByClassName("storepreview")[0].style.display = "none";
  previewColorChange(currentlyActiveColors.prim, currentlyActiveColors.dark, currentlyActiveColors.light, currentlyActiveColors.accent);
})
// Store
var storeBtn = document.getElementById("storepreview");
storeBtn.onclick = (function(event){
  document.getElementsByClassName("storepreview")[0].style.display = "block";
  document.getElementsByClassName("blogpreview")[0].style.display = "none";
  document.getElementsByClassName("preview")[0].style.display = "none";
  previewColorChange(currentlyActiveColors.prim, currentlyActiveColors.dark, currentlyActiveColors.light, currentlyActiveColors.accent);
})

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

// CUSTOM COLOR SCHEME BUTTON MODAL
var customCard = document.getElementsByClassName("testcard")[0];
customCard.onclick =(function(event){
  var modal = document.getElementsByClassName("modal")[1];
  modal.style.display = "block";
  fadeIn(modal);

    document.getElementsByClassName("modal")[1].addEventListener("click", function () { // if user clicks anywhere that is not the button
        document.getElementsByClassName("modal")[1].style.display = "none";
    }, false);
    document.getElementsByClassName("modalcontent-colscheme")[0].addEventListener("click", function (ev) {
        ev.stopPropagation();
    }, false);
    document.getElementsByClassName("icon-close")[0].addEventListener("click", function (ev) {
      document.getElementsByClassName("modal")[1].style.display = "none";
    },false);

});




// Color scheme picker functionality:
// ccs = CUSTOM COLOR SCHEME
// HOW IT WORKS:
// ccsClickCount manages which click number it is, first click determines the primary color
// second click determines the accent color, once ccsClickCount = 2, nothing happens
// The repick button then resets ccsClickCount to 0
var colorBoxes = document.getElementsByClassName("colbox");
var ccsPrim = document.getElementsByClassName('colschemebox-lg')[0];
var ccsAccent = document.getElementsByClassName('colschemebox-lg')[1];
var ccsClickCount = 0;
// repick button functionality:
var repickBtn = document.getElementById("repickbtn");
var saveCssBtn = document.getElementById("savecolschemebtn");

function repickCCS(){
  if(document.getElementById("colscheme-selected") != null){
    if(document.getElementById("colscheme-selected").style.boxShadow != null){
      document.getElementById("colscheme-selected").style.boxShadow = "";
      document.getElementById("colscheme-selected2").style.boxShadow = "";
      document.getElementById("colscheme-selected").removeAttribute("id");
      document.getElementById("colscheme-selected2").removeAttribute("id");
    }
  }
  ccsClickCount = 0;
}
repickBtn.onclick = (function(event){
  repickCCS();
})
saveCssBtn.onclick = (function(event){
  //change the preview to match the selected colors
  previewColorChange(ccsPrim.style.backgroundColor,document.getElementsByClassName("colschemebox-sm")[0].style.backgroundColor, document.getElementsByClassName("colschemebox-sm")[1].style.backgroundColor, ccsAccent.style.backgroundColor);
  // change the card to match the selected colors
  document.getElementsByClassName("primarycolor")[0].style.backgroundColor = ccsPrim.style.backgroundColor;
  document.getElementsByClassName("darkprimarycolor")[0].style.backgroundColor = document.getElementsByClassName("colschemebox-sm")[0].style.backgroundColor;
  document.getElementsByClassName("lightprimarycolor")[0].style.backgroundColor = document.getElementsByClassName("colschemebox-sm")[1].style.backgroundColor;
  document.getElementsByClassName("accentcolor")[0].style.backgroundColor = ccsAccent.style.backgroundColor;

})

//corresponding 700 & 300 colors due to googles strange naming convention
var materialColors = [{
    "prim": "#F44336",
    "light": "#E57373",
    "dark": "#D32F2F"
  },{
    "prim": "#E91E63",
    "light": "#F06292",
    "dark": "#C2185B"
  },{
    "prim": "#9C27B0",
    "light": "#BA68C8",
    "dark": "#7B1FA2"
  },  {
    "prim": "#673AB7",
    "light": "#9575CD",
    "dark": "#512DA8"
  },  {
    "prim": "#3F51B5",
    "light": "#7986CB",
    "dark": "#303F9F"
  },  {
    "prim": "#2196F3",
    "light": "#64B5F6",
    "dark": "#1976D2"
  },  {
    "prim": "#03A9F4",
    "light": "#4FC3F7",
    "dark": "#0288D1"
  },  {
    "prim": "#00BCD4",
    "light": "#4DD0E1",
    "dark": "#0097A7"
  },  {
    "prim": "#009688",
    "light": "#4DB6AC",
    "dark": "#00796B"
  },  {
    "prim": "#8BC34A",
    "light": "#AED581",
    "dark": "#689F38"
  },  {
    "prim": "#CDDC39",
    "light": "#DCE775",
    "dark": "#AFB42B"
  },  {
    "prim": "#FFEB3B",
    "light": "#FFF176",
    "dark": "#FBC02D"
  },  {
    "prim": "#FFC107",
    "light": "#FFD54F",
    "dark": "#FFA000"
  },  {
    "prim": "#FF9800",
    "light": "#FFB74D",
    "dark": "#F57C00"
  },  {
    "prim": "#FF5722",
    "light": "#FF8A65",
    "dark": "#E64A19"
  }
];

for (var z=0; z<colorBoxes.length; z++){
  colorBoxes[z].addEventListener('click', function(e) {
    if (ccsClickCount ==0 || ccsClickCount ==2){
      if (ccsClickCount ==2){
        repickBtn.classList.add("shake-rotate");
        setTimeout(function(){repickBtn.classList.remove("shake-rotate");}, 500);
        repickCCS();
      }
      ccsPrim.style.backgroundColor = this.children[1].innerHTML;

      for (var q=0;q<materialColors.length;q++){
        if(materialColors[q].prim == this.children[1].innerHTML){
          document.getElementsByClassName("colschemebox-sm")[0].style.backgroundColor = materialColors[q].dark;
          document.getElementsByClassName("colschemebox-sm")[1].style.backgroundColor = materialColors[q].light;
        }
      };
      this.id ="colscheme-selected";
      this.style.boxShadow = "0 0 0 2px rgba(0,0,0,1) inset";
      ccsClickCount ++;
    } else if (ccsClickCount == 1) {
      ccsAccent.style.backgroundColor = this.children[1].innerHTML;
      this.id ="colscheme-selected2";
      this.style.boxShadow = "0 0 0 2px rgba(0,0,0,1) inset";
      ccsClickCount ++;
    } else {


    }
  });
};
