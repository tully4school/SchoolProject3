console.log("we are connected!")
    // evt.preventDefault()
let tabLinks = document.querySelectorAll(".tabLinks")
let tabContent = document.querySelectorAll(".tabContent")


// tablinks.forEach(function(opener) {
// change.addEventListener("click", openTabs);

// });

// for (let i = 0;)
// tabLinks.forEach(function(listener){
// 	tabLinks.addEventListener("click", function(evt) {
//     evt.preventDefault()
//     console.log(evt)
// })
// }

tabLinks.forEach(function(listener){
	listener.addEventListener("click", open, function(evt){
		evt.preventDefault()
		console.log(evt)
	})
})

//the function to open each tab by removing an active class of another

function open(openTab){
	let currentBtn = openTab.currentTarget; //found out about currentTarget from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
	let coin = currentBtn.dataset.coin; // choosing the data-coin attribute
//stating that any time i click on another button it removes the class from the current target
	tabContent.forEach(function(addClass){
		addClass.classList.remove("active")
	})
	tabLinks.forEach(function(removeClass){
		removeClass.classList.remove("active")
	})
//stating that any button i push will add the class of active
	document.querySelector('#' + coin).classList.add("active")

	currentBtn.classList.add("active")
}

