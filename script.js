$(function () {

  var textInfo = $('description');
  var timeBlock = $('time-block');
  var saveBtn = $('saveBtn');

  var currentDate = dayjs().format('dddd MMMM D, YYYY h:mm a');
  $('#currentDay').text(currentDate);

  // changes time-block color according to current time of day
  function setHourColor(){
    var currentHour = dayjs().hour();
    console.log (currentHour);
    $(timeBlock).each(function() {
      // timeBlock.addClass('time-block');
      var time = parseInt($(this).attr("id").split("hour-")[0]);
      
      if (time === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else if (time > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // shows user input for tasks on each time-block
  function showTextInfo() {
    var userIn = localStorage.getItem('description');

    if (!userIn) {
      return;
    }
  }

  // saves user input for time-blocks when save button clicked
  saveBtn.on('click', function(event) {
    event.preventDefault();
    // textInfo = $(this).siblings(textInfo).val();
    // textTime = $(this).parent().attr("id");

    var infoEl = userIn.value;

    localStorage.setItem('description', infoEl);
    console.log(textInfo);
  });

  // on refresh of page, gets user input from local storage and displays again
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
