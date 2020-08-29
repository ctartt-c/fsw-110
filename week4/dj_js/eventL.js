const title = document.getElementById("header")
title.style.textAlign = "center";
title.style.color = "blue";

const boxChange = document.getElementById("box")
document.querySelector("#box").classList.add("border")

boxChange.addEventListener("mouseover", function(){
  boxChange.style.backgroundColor = "red"
})

boxChange.addEventListener("mousedown", function(){
  boxChange.style.backgroundColor = "red"
})
boxChange.addEventListener("mouseup", function(){
  boxChange.style.backgroundColor = "yellow"
})
boxChange.addEventListener("dblclick", function(){
  boxChange.style.backgroundColor = "green"
})
document.addEventListener("wheel", function(){
  boxChange.style.backgroundColor = "orange"
})
boxChange.addEventListener("mouseover", function(){
  boxChange.style.backgroundColor = "blue"
})
boxChange.addEventListener("keydown", function(event) {
  console.log(event.which);

  
})