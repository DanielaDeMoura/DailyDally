$(document).ready(function () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));

    for (let hour = 9; hour <= 5; hour++) {
      let timeblock = $("<div>").addClass("row time-block");
      let hourDiv = $("<div>").addClass("col-md-1 hour").text(dayjs().hour(hour).format("hA"));
      let eventInput = $("<textarea>").addClass("col-md-10 description");
      let saveBtn = $("<button>").addClass("col-md-1 saveBtn").html("<i class='fas fa-save'></i>");
  
  
      saveBtn.click(function () {
     
        let eventText = eventInput.val();
        localStorage.setItem(`event-${hour}`, eventText);
      });
  
      // timeblock
      timeblock.append(hourDiv, eventInput, saveBtn);
  
      $(".container").append(timeblock);
  
      let savedEvent = localStorage.getItem(`event-${hour}`);
      if (savedEvent) {
        eventInput.val(savedEvent);
      }
  
      let currentHour = dayjs().set('hour', hour);

      if (currentHour.isBefore(dayjs(), 'hour')) {
        timeblock.addClass("past");
      } else if (currentHour.isSame(dayjs(), 'hour')) {
        timeblock.addClass("present");
      } else {
        timeblock.addClass("future");
      }
    }
  });
  