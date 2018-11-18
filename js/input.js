var inputTag = document.querySelector("input");
var submitBtn = document.querySelector(".newsletter__submit");

inputTag.addEventListener("keyup", function() {
    if (inputTag.value !== "") {
        submitBtn.classList.add("typing");
    } else {
        submitBtn.classList.remove("typing");
    }
});
