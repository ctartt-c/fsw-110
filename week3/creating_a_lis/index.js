for (var i = 0; i < 10; i++) {
  var newH1 = document.createElement("h1")
  newH1.textContent = "Hello World"
  newH1.style.color = "grey"
  document.body.append(newH1)
}

var namesList = document.createElement("ul")
document.body.append(namesList)

const names = ["steve","larry","joe","shirley","steph","nate","emily"]
for (var c = 0; c < names.length; c++){
  var newName = document.createElement("li")
  newName.textContent = names[c]
  var namesList = document.querySelector('ul')
  namesList.append(newName)

}