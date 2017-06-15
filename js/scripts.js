
var link = document.querySelector(".search");
var popup = document.querySelector(".popup-sedona");
var close = popup.querySelector(".popup-sedona");
var form = popup.querySelector("form-infos");
var datec = popup.querySelector("[name=name-date-come]");
var dateo= popup.querySelector("[name=name-date-out]");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
        }
    }
});


