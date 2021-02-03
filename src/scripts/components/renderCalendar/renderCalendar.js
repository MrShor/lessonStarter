const renderCalendar = ({ appElement, currentDate, objectTime}) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  const calendarHeadTr = document.createElement("tr");
  const calendarBodyTr = document.createElement("tr");

  const daysName = [ "Su", "Mo", "Tu", "We", "Th", "Fr", "St" ];
  const lastDayOfMonth = new Date(objectTime.year, objectTime.month +1, 0).getDate();

  for (var index = 1; index <= lastDayOfMonth; index++) {
    let thDatesPanel = document.createElement("th");
    let dayName = document.createElement("span");
    let dateNubmer = document.createElement("span");
    let tdDatesPanel = document.createElement("td");

    let weekDayIndex = new Date (objectTime.year, objectTime.month, index).getDay();

    thDatesPanel.classList.add("calendar-header__th");
    dayName.classList.add("calendar-header__th__day");
    dateNubmer.classList.add("calendar-header__th__number");

    dayName.textContent = daysName[weekDayIndex];
    dateNubmer.textContent = index;
    thDatesPanel.appendChild(dayName);
    thDatesPanel.appendChild(dateNubmer);
    calendarHeadTr.appendChild(thDatesPanel);
    calendarBodyTr.appendChild(tdDatesPanel);
  }

  calendarContainer.classList.add("calendar-container");
  calendarHeadTr.classList.add("calendar-header");
  calendarBodyTr.classList.add("calendar-body");

  calendarBody.appendChild(calendarBodyTr);
  calendarHead.appendChild(calendarHeadTr);
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);
};

export default renderCalendar;
