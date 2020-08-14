var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

var newP = document.createElement("p")
newP = document.textContent = "All of this was created with Javascript"
document.body.append(newP)


// var newOl = document.createElement("ol")
// newOl.textContent = "My first list"
// var myOl = document.getElementById("myOl")
// myOl.append(newOl)

// var newOl = document.createElement("ol")
// newOl.textContent = "My second list"
// var myOl = document.getElementById("myOl")
// myOl.append(newOl)

// var newOl = document.createElement("ol")
// newOl.textContent = "My third list"
// var myOl = document.getElementById("myOl")
// myOl.append(newOl)

var newLi = document.createElement("li")
newLi.textContent = "My first Li"
var myList = document.getElementById("myOl")
myList.prepend(newLi)

var newLi = document.createElement("li")
newLi.textContent = "My Second Li"
var myList = document.getElementById("myOl")
myList.prepend(newLi)

var newLi = document.createElement("li")
newLi.textContent = "My Third Li"
var myList = document.getElementById("myOl")
myList.prepend(newLi)