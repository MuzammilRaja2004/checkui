



var next = document.getElementById('extras-li')

function addbtn() {
    var extra = document.getElementById('main-input')

    if (extra.value === "") {
        alert("you empty field is empty")
    }
    else {

        var list = document.createElement('li')
        var element = document.createTextNode(extra.value)
        var names = list.appendChild(element)


        // create Div
        var divs = document.createElement('div')
        list.appendChild(divs)
        // create Edit Button
        var buttons = document.createElement('button')
        var nodebtn = document.createTextNode("edit")
        buttons.setAttribute("onclick", "edits(this)")
        buttons.appendChild(nodebtn)
        divs.appendChild(buttons)
        var main = next.appendChild(list)

        // create delete Button
        var dltbuttons = document.createElement('button')
        buttons.setAttribute("onclick","Deletebtn(this)")
        var dltnodebtn = document.createTextNode("delete")
        dltbuttons.appendChild(dltnodebtn)
        divs.appendChild(dltbuttons)
        var main = next.appendChild(list)

        extra.value = ""
    }
}

// Create Delete All Function
function deleteall() {
    next.innerHTML = ""
}

// Create Delete Button Function
function Deletebtn(e) {
    e.parentNode.remove()
}



// Create Edit Functions
function edits(e) {
    var need = prompt("Edit Your Todo", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = need
}
