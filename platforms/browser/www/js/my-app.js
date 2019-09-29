// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

//JSON

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    $.getJSON("../profiles.json", function(data){console.log(data.content[0].name)});
    console.log("next");
    console.log("printed");
});



// Now we need to run the code that will be executed only for About page.

// // Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// myApp.onPageInit('about', function (page) {
//     // Do something here for "about" page
//     console.log("shit");
// })

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
    }
})

// // Option 2. Using live 'pageInit' event handlers for each page
// $$(document).on('pageInit', '.page[data-page="about"]', function (e) {
//     // Following code will be executed for page with data-page attribute equal to "about"
//     myApp.alert('Here comes About page');
// })


// swipe motion

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

// function buttonClick(){
//     console.log("try")    
// }

var pic = ["res/1.jpg", "res/2.jpg", "res/3.jpg", "res/4.jpg", "res/5.jpg",
"res/6.jpg", "res/7.jpg", "res/8.jpg", "res/9.jpg", "res/10.jpg"]
var names = ["Name: Adam", "Name: Brian", "Name: Charlie", "Name: Dawson", "Name: Eddie", 
    "Name: Frank", "Name: George", "Name: Hank", "Name: Igor", "Name: Jack"];
var ages = ["Age: 20", "Age: 18", "Age: 22", "Age: 21", "Age: 19", 
    "Age: 23", "Age: 25", "Age: 30", "Age: 21", "Age: 24"];
var descs = ["I like dancing.", "i like programming.", "i like playing guitar.", "I have 2 dogs.", "I love seafood!",
    "I go running.", "I sing.", "I stan Taylor Swift", "Call me, Beep me, if you wanna reach me", "Date me, I'm desperate."];

var i = 0;
$( "#unlikeButt" ).click(function() {
    myApp.alert('UNLIKE');
    document.getElementById("img").src = pic[i];
    document.getElementById("name").innerHTML = names[i];    
    document.getElementById("age").innerHTML = ages[i];
    document.getElementById("description").innerHTML = descs[i];
    console.log(i++);
  });

$( "#likeButt" ).click(function() {
    myApp.alert('LIKE');
    document.getElementById("img").src = pic[i];
    document.getElementById("name").innerHTML = names[i];    
    document.getElementById("age").innerHTML = ages[i];
    document.getElementById("description").innerHTML = descs[i];
    console.log(i++);
 });


function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    var a = document.getElementById('dumb');

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            document.getElementById('unlikeButt').click();
            console.log("left swipe");
            // myApp.alert('UNLIKE');
        } else {
            /* right swipe */
            document.getElementById('likeButt').click();
            console.log("rightswipe");
            // myApp.alert('LIKE');
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
            
        } else { 
            /* down swipe */
           
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};