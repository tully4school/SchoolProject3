console.log("we are connected!")
    // evt.preventDefault()
let tabLinks = document.querySelector(".tabLinks")
let tabContent = document.querySelector(".tabContent")

// tablinks.forEach(function(opener) {
// change.addEventListener("click", openTabs);

// });

// for (let i = 0;)
tabLinks.forEach(function(listener){
	tabLinks.addEventListener("click", function(evt) {
    evt.preventDefault()
    console.log(evt)
})
}