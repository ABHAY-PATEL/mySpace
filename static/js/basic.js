// var headOne = document.querySelector("#two")
// headOne.addEventListener("mouseover",function() {
//   headOne.textContent ="You Are Caught";
//   headOne.style.color="#F2AA4CFF";
// })
// headOne.addEventListener("mouseout",function() {
//   headOne.textContent ="Learn From A Single-Shot";
//   headOne.style.color="white";
// })
var sphere = document.querySelector("#SPHERE")
sphere.addEventListener('mouseover', function(){
    sphere.textContent = "SPACE";
    sphere.style.color = "#355070";
})
sphere.addEventListener('mouseout', function(){
    sphere.textContent = "SPHERE";
    sphere.style.color = "#6D597A";
})


var cocolor = document.querySelectorAll(".colorss");

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  for(var i=0;i<cocolor.length;i++){
    // console.log(header[i]);
    cocolor[i].style.transition = '2s';
    cocolor[i].style.color = colorInput;
  }
}
// function changeHeaderColor(){
//     colorInput = getRandomColor()
//     header.style.transition = '2s';
//     header.style.color = colorInput;
//   }

setInterval("changeHeaderColor()",1000);