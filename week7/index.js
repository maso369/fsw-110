var myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span =document.createElement("SPAN");
    var text =document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

document.getElementsByClassName("addBtn")[0]
.addEventListener("click", ()=>{
    newElement("myInput")
    newElement("myInput2")
})

var close =document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.getElementById("myUL")
list.addEventListener("click", function(ev) {
    if(ev.target.tagName === "li") {
        ev.target.classList.toggle("checked");
    }
})

function newElement(inputId) {
    var li= document.createElement("li");
    var inputValue = document.getElementById(inputId).Value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === "") {
        alert("you must write Something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById(inputId).Value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}