// tracking the user's interactions with the page

var report_number = 1; // The number of times we've sent information to the console
var seconds_between_reports = 5; // how often we send the information
var start_time = new Date(); // what time is it now?
var scroll_count = 0; // the amount the user has scrolled. We set this up here so the variable has global scope.
var click_count = 0; // the number of times the user has clicked on things. We set this up here so the variable has global scope.
var click_things = Array(); // a string which will contain all the things the user has clicked on, even if they aren't hyperlinks
var oldPageOffset = 0; // we need this to set up our page scrolling counter - we only want to measure the distance between each scroll, not the distance the user is from the top of the page (not confusing at all...)

function reportOnUserBehaviour() {
    var current_time = new Date(); // we can then compare this with start_time to see how long the user has been on the page.

    // We could log this to the console or save it to a spreadsheet/database using 'AJAX'

    console.log('Report ' + report_number);
    console.log('In the last ' + seconds_between_reports + ' seconds, the user has...');
    console.log('* scrolled ' + scroll_count + ' pixels');
    console.log('* clicked on ' + click_count + ' things:');
    if (click_count > 0) {
        for (i = 0; i < click_things.length; i++) {
            console.log('* clicked on an ' + click_things[i]);
        }
    }

    console.log('* spent a total of ' + Math.round((current_time - start_time) / 1000) + ' seconds on this page');

    scroll_count = 0;
    click_count = 0; // reset these variables
    click_things = []; // empty the array
    report_number++; // increase our report number
}

// create a function to add the distance the user has scrolled to the scroll_count variable

function handlePageScroll() {
    newPageOffset = window.pageYOffset // where are we now?
    scroll_count = scroll_count + Math.abs(newPageOffset - oldPageOffset); // add the absolute difference (i.e. doesn't matter if it's positive or negative) between where we were and where we are
    oldPageOffset = newPageOffset; // make a note of where the page is so we can use this value when, or if, the user scrolls again 

}

// for this function we are passing in the click event that we have noticed happening in the browser
function handleDocumentClick(event) {
    click_count++; // increase the click_count variable
    click_things.push(event.target.tagName + ' tag'); // push the thing someone clicked on into an array for display later on
}

// set our reporting function going. This will run until the window is closed.
setInterval(function() {
    reportOnUserBehaviour();
}, seconds_between_reports * 1000);

document.onscroll = handlePageScroll; // Asynchronous code: whenever the user scrolls the document, run the function handlePageScroll, which will modify our scroll_count variable, ready to report back to the console.

document.body.onclick = handleDocumentClick; // Asynchronous code: 'listen' for when the user clicks on something in the document body, and then run the function handleDocumentClick, which will modify our click_count and click_area variables, ready to report back to the console.