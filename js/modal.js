let modal001 = document.getElementById("modal-001");

let btn001 = document.getElementById("btn-001");

let btnClose001 = document.getElementById("btn-close-001");

btn001.onclick = function() {
    modal001.style.display = "block";
}

btnClose001.onclick = function() {
    modal001.style.display = "none";
}

document.addEventListener("keydown", function(e) {
    if (modal001.style.display === "block") {
        if(e.code === "Escape") {
            modal001.style.display = "none";
        }
    } 
});


let modal002 = document.getElementById("modal-002");

let btn002 = document.getElementById("btn-002");

let btnClose002 = document.getElementById("btn-close-002");

btn002.onclick = function() {
    modal002.style.display = "block";
}

btnClose002.onclick = function() {
    modal002.style.display = "none";
}

document.addEventListener("keydown", function(e) {
    if (modal002.style.display === "block") {
        if(e.code === "Escape") {
            modal002.style.display = "none";
        }
    } 
});

let modal003 = document.getElementById("modal-003");

let btn003 = document.getElementById("btn-003");

let btnClose003 = document.getElementById("btn-close-003");

btn003.onclick = function() {
    modal003.style.display = "block";
}

btnClose003.onclick = function() {
    modal003.style.display = "none";
}

document.addEventListener("keydown", function(e) {
    if (modal003.style.display === "block") {
        if(e.code === "Escape") {
            modal003.style.display = "none";
        }
    } 
});


// let closeButton = document.querySelectorAll("btn-close");
// closeButton.forEach (function(item){
//     item.addEventListener("click", function(event){
//         var modalId = this.getElementById('btn-close-003'),
//         modalElement = document.querySelector('.modal[btn-close="' + modalId + '"]');
//         modalElement.style.display = "none";
//     });
// });



