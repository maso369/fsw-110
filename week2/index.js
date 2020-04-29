var newH1 = document.createElement("h1")
newH1.textContent = "Welcome to my js site"
var myBody = document.getElementById("body")
myBody.append(newH1)


var newP = document.createElement("p")
newP.textContent = "All of this was created in JavaScript"
document.body.append(newP)

var newLi = document.createElement("li")
newLi.textContent = "gamma"
var List = document.getElementById("list")
List.append(newLi)