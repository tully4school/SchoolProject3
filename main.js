console.log("we are connected!")
    // evt.preventDefault()
    // 684cffb24d974a6e8f18bea5d0e5b926
let tabLinks = document.querySelectorAll(".tabLinks")
let tabContent = document.querySelectorAll(".tabContent")
let url="https://api.nomics.com/v1/currencies/ticker?key=684cffb24d974a6e8f18bea5d0e5b926&ids=BTC,ETH,XRP,Tether&interval=1d,30d&convert=EUR"
let h1 = document.createElement("h1")
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
fetch(url)
.then(res=> {
	return res.json()
})
.then(res => {
	console.log(res)
	// h1.innerHTML = res[0].currency;
	console.log(res[0].currency)
	for (let i = 0; i < tabContent.length; i++) {
		h1.innerHTML = res[0].name;
		tabContent[i].appendChild(h1)
	}

	

})
.then(res=> {
	console.log("success!",res)
})
.catch(err => {
	console.log("NOOOO!!!", err)
})





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


// function openCoin(evt, coinName) {
//   // Declare all variables
//   var i, tabContent, tabLinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabContent = document.getElementsByClassName("tabContent");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementByClassName(tabContent).style.display = "block";
//   evt.currentTarget.className += " active";
// } 



