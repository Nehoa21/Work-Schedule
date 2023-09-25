// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd MMMM D, YYYY h:mm a');
  $('#currentDay').text(currentDate);

  var textInfo = $('description');
  var timeBlock = $('time-block');
  var saveBtn = $('saveBtn');

  showTextInfo();

  function setHourColor(){
    var currentHour = dayjs().hour();
    console.log (currentHour);
    timeBlock.each(function() {
      // timeBlock.addClass('time-block');
      var time = parseInt($(this).attr("id").split("hour-")[0]);
      
      if (time < currentHour) {
        $(this).addClass("past");
      } else if (time === currentHour) {
        $(this).addClass("present");
      } else if (time > currentHour) {
        $(this).addClass("future");
      }
    });
  }

  function showTextInfo() {
    var userIn = localStorage.getItem('description');

    if (!userIn) {
      return;
    }
  }

  saveBtn.on('click', function(event) {
    event.preventDefault();
    // textInfo = $(this).siblings(textInfo).val();
    // textTime = $(this).parent().attr("id");

    var infoEl = userIn.value;

    localStorage.setItem('description', infoEl);
    console.log(textInfo);
  });

  function init() {
    // var storedText = JSON.parse(localStorage.getItem('textInfo'));

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    showTextInfo();
    setHourColor();
  }
  init();
});
