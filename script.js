

/* function clicou(){
     var p = document.getElementById("paragrafoEscondido")
    p.style.visibility = "visible"
}
   
function retirou(){
    var p = document.getElementById("paragrafoEscondido")
    p.style.visibility = "hidden"
}


 */
/***formulario */
var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});