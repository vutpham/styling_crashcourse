var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", function() {
 if (document.body.style.background !== "purple") {
	body.style.background = "purple";
 } else {
	body.style.background = "white";
}
});
