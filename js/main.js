

// show dropdown on themes button
var themesbutton = document.getElementById("themesbtn");
themesbutton.onclick= function(event){
  var dropdown = document.getElementById("themesdropdown");
  dropdown.classList.toggle("show");
  themesbutton.classList.toggle("activebtn");
};

// show dropdown on type button
var typebutton = document.getElementById("typebtn");
typebutton.onclick= function(event){
  var dropdown = document.getElementById("typedropdown");
  dropdown.classList.toggle("show")
  typebutton.classList.toggle("activebtn")
};
