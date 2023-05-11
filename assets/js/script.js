// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var pastTime = $('.past');
var presentTime = $('.present');
var futureTime = $('.future');


//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
//});

// TODO: Add code to display the current date in the header of the page. Done!
var currentDayEl = $('#currentDay');

function dayCurrent() {
  var todayDate = dayjs().format('dddd, MMMM D');
  currentDayEl.text(todayDate);
  timeBlockColor()
}
dayCurrent();

setInterval(dayCurrent, 1000);

//if string value ie : the hour"10" is equal to current hour so var presentHour = dayjs().format('H');
//then class = present

//if string value ie: the hour"11" is greater than presentHour ie:"10" then do class = future

//if string value ie: the hour"9" is less than presentHour ie:"10" then do class = past
function timeBlockColor() {
  var presentHour = dayjs().hour();
  var timeBlockTimeArray = $(".time-block");
  console.log(presentHour);
  for (var i = 0; i < timeBlockTimeArray.length; i++) {
    var timeBlockTime = timeBlockTimeArray[i].getAttribute('id');
    var timeBlockEl = timeBlockTimeArray[i]
    if (timeBlockTime < presentHour) {
      //timeBlockTime.removeClass('past')
      //timeBlockTime.removeClass('future')
      timeBlockEl.classList.add('past')
     } else if (timeBlockTime == presentHour) {
       timeBlockEl.classList.remove('past')
       //timeBlockTime.removeClass('present')
       timeBlockEl.classList.add('present')
     } else if (timeBlockTime > presentHour) {
       timeBlockEl.classList.remove('present')
       //timeBlockTime.removeClass('future')
       timeBlockEl.classList.add('future')
     }
  }
 
  // if (timeBlockTime < presentHour || timeBlockTime > 17) {
  //   timeBlockTime.removeClass('present')
  //   timeBlockTime.removeClass('future')
  //   timeBlockTime.addClass('past')
  // }
}
//get element by class so timeblock class
//and compare there id # to the hour of day


$('.saveBtn').on('click', function() {
  console.log($(this).siblings('.description').val())
  var key = $(this).parent().attr('id')
  var value = $(this).siblings('.description').val()
  localStorage.setItem(key, value);
})

$('.time-block').each(function() {
  var hourId = $(this).attr('id');
  $(this).children('textarea').val(localStorage.getItem(hourId));
})
