
/*let home = document.createElement("h1")
home.textContent = "Changing my styles and classes with Javascript.";
myBody.append(home);

let ul = document.createElement("ul");
for(let i = 1; i <= 4 ; i++){
    let li = document.createElement("li");
    li.textContent = "This is list number " + i;
    ul.append(li);
}
myBody.append(ul);

var newUl = document.createElement("ul");
var myList = document.getElementById("myList");
myList.appendChild(newUl);

var newLi = document.createElement("li");
newLi.textContent = "My first Li";
var myList = document.getElementById("myOl");
newUl.appendChild(newLi);

var newLi2 = document.createElement("li");
newLi2.textContent = "My first Li";
var myList = document.getElementById("myOl");
newUl.appendChild(newLi2);

var newLi3 = document.createElement("li")
newLi3.textContent = "My first Li"
var myList = document.getElementById("myOl")
newUl.appendChild(newLi3)*/

//let myBody = document.querySelector("body");
//let myBody = document.querySelector("body");
var h2List = [
  "My life is a great.", 
  "Need more javaScript", 
  "This my third h2", 
  "This is my fourth", 
  "This is my fifth",
  
  
]

var List = document.getElementById("myList")

for (var i = 0; i < h2List.length; i++) {
  var newName = document.createElement("h2")
  newName.textContent = h2List[i]
  myList.style.fontSize = "20px"
  myList.style.fontWeight = "lighter"
  myList.style.fontFamily = "sansSarif"
  myList.style.color = "cornFlowerBlue"
  myList.classList.add("border")
  List.append(newName)
}









