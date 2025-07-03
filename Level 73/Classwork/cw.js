  
  
  let currentDate = new Date();

  document.getElementById("dateDisplay").innerHTML = currentDate.toLocaleString();

  function modifyDate() {
      let newYear = document.getElementById("yearInput").value;
      let newMonth = document.getElementById("monthInput").value - 1;
      let newDay = document.getElementById("dayInput").value;
      let newHour = document.getElementById("hourInput").value;
      let newMinute = document.getElementById("minuteInput").value;

      let newDate = new Date();
      newDate.setFullYear(newYear);
      newDate.setMonth(newMonth);
      newDate.setDate(newDay);
      newDate.setHours(newHour);
      newDate.setMinutes(newMinute);

      document.getElementById("modifiedDate").innerHTML = newDate.toLocaleString();
  }

  function updateTime() {
      currentDate = new Date();
      document.getElementById("dateDisplay").innerHTML = currentDate.toLocaleString();
  }
  setInterval(updateTime, 1000);

  function formatDateComponents() {
      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let seconds = currentDate.getSeconds();

      let displayText = "Day: " + day + "\n";
      displayText += "Month: " + month + "\n";
      displayText += "Year: " + year + "\n";
      displayText += "Hours: " + hours + "\n";
      displayText += "Minutes: " + minutes + "\n";
      displayText += "Seconds: " + seconds;

      document.getElementById("components").innerHTML = displayText;
  }



