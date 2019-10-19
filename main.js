console.log("we are connected!")
    // evt.preventDefault()
    // 684cffb24d974a6e8f18bea5d0e5b926
let tabLinks = document.querySelectorAll(".tabLinks")
let tabContent = document.querySelectorAll(".tabContent")
let url = "https://api.nomics.com/v1/currencies/ticker?key=684cffb24d974a6e8f18bea5d0e5b926&ids=BTC,ETH,XRP,USDT,BCH,LTC,BNB,EOS,BSV,XLM&interval=1d,30d&convert=EUR"
let h1 = document.createElement("h1")
let div = document.querySelectorAll("div")



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
    .then(res => {
        return res.json()
    })
    .then(res => {

    	// for (let i = 0; i < res.length; i++) {
    	// 	let name = res[i].currency;
    	// }
        for (let i = 0; i < res.length; i++) {
        	for (let j = 0; j < div.length; j++) {
        	let name = res[i].currency;
        	let divId = div[j].id
        	console.log(div[j].id)
        	if (divId === name){
        		h1.innerHTML = name;
        		div[j].appendChild(h1)
        	}
        }
    }
    })
    .then(res => {
        console.log("success!", res)
    })
    .catch(err => {
        console.log("NOOOO!!!", err)
    })





tabLinks.forEach(function(listener) {
    listener.addEventListener("click", open, function(evt) {
        evt.preventDefault()
        console.log(evt)
    })
})

//the function to open each tab by removing an active class of another

function open(openTab) {
    let currentBtn = openTab.currentTarget; //found out about currentTarget from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
    let coin = currentBtn.dataset.coin; // choosing the data-coin attribute
    
    //stating that any time i click on another button it removes the class from the current target
    tabContent.forEach(function(addClass) {
        addClass.classList.remove("active")
    })
    tabLinks.forEach(function(removeClass) {
            removeClass.classList.remove("active")
        })
        //stating that any button i push will add the class of active
    document.querySelector('#' + coin).classList.add("active")

    currentBtn.classList.add("active")
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            // h1.innerHTML = res[0].currency;
            // for (let i = 0; i < tabContent.length; i++) {
            //     if (res[0].name == coin) {
            //         console.log(res[0])
            //     }
            //     // h1.innerHTML = res[0].name;
            //     // tabContent[i].appendChild(h1)
            // }

            // for (let i = 0; i < coin; i++){
            // 	for (let j = 0; j < resName.length; j++){
            // 		if (i === j) {
            // 			console.log(i + j)
            // 		}
            // 	}
            // }

        })




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


//FOR TRYING TO GET THE NAME IN THE SELECTED DIV


        // console.log(res[0].name)
            // h1.innerHTML = res[0].currency;
        
    //     for (let i = 0; i < res.length; i++) {
    //     	for (let j = 0; j < div.length; j++) {
    //     	let name = res[i].currency;
    //     	let divId = div[j].id
    //     	if (divId === name){
    //     		console.log("its a match")
    //     	}
    //     }
    // }
        // for (let i = 0; i < div.length; i++){
        // 	let names = div[i].id;
        // 	console.log(names)
        // }