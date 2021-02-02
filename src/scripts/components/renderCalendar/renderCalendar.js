const renderCalendar = ({ appElement, currentDate, objectTime}) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  const trCalendarBar = document.createElement("tr");

  const daysName = [ "Su", "Mo", "Tu", "We", "Th", "Fr", "St" ];
  const lastDayOfMonth = new Date(objectTime.year, objectTime.month +1, 0).getDate();

  for (var index = 1; index <= lastDayOfMonth; index++) {
    let thDatesPanel = document.createElement("th");
    let dayName = document.createElement("span");
    let dateNubmer = document.createElement("span");
    let weekDayIndex = new Date (objectTime.year, objectTime.month, index).getDay();

    thDatesPanel.classList.add("dates-panel__th");
    dayName.classList.add("dates-panel__th__day");
    dateNubmer.classList.add("dates-panel__th__number");

    dayName.textContent = daysName[weekDayIndex];
    dateNubmer.textContent = index;
    thDatesPanel.appendChild(dayName);
    thDatesPanel.appendChild(dateNubmer);
    trCalendarBar.appendChild(thDatesPanel);
  }

  calendarContainer.classList.add("dates-table");
  trCalendarBar.classList.add("dates-panel");

  calendarHead.appendChild(trCalendarBar);
  calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);
  // let currentDate = new Date();
};

export default renderCalendar;
