$(function () {

  var textInfo = $('description');
  var timeBlock = $('time-block');
  var saveBtn = $('saveBtn');

  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('dddd MMMM D, YYYY h:mm a');
  $('#currentDay').text(currentDate);

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
