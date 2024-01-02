const list = document.getElementById('task_list');

function add () {
    if (textinput.value === "") {
        alert ("Enter Something!");
    }
    else {
        let li = document.createElement("li");
        
        let span = document.createElement('span');
        span.innerHTML = textinput.value;
        span.setAttribute('class','unchecked checked');
        li.appendChild(span);

        span = document.createElement('span');
        span.innerHTML = '\u00D7';
        span.setAttribute('class','del');
        li.appendChild(span);
        li.app
        list.appendChild(li);
        textinput.value = "";
    }
    save();
}

list.addEventListener ('click', function (e) {
    if (e.target.className == "del") {
        e.target.parentElement.remove()
    }
    else if (e.target.tagName == "li") {
        let li =e.target;

        li.childNodes[0].classList.toggle('unchecked');
    }
    else {
        e.target.classList.toggle('unchecked');
    }
    save();

});


function save () {
    localStorage.setItem('data', list.innerHTML);
}

function open () {
   list.innerHTML = localStorage.getItem('data');
}

open();



