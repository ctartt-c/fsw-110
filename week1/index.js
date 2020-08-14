var  result = document.querySelectorAll("ul#My-Life > li") ;console.log(Array.from(result))




for (var i = 0; i< result.length; i++) {
  result[i].textContent = "Got some Bacon"
  
}