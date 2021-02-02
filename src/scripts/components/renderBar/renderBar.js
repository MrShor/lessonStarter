const renderBar = ({ appElement, currentDate, objectTime }) => {
  const calendarToolbar = document.createElement("div");
  const calendarMonth = document.createElement("span");
  const calendarYear = document.createElement("span");
  const prevMonthButton = document.createElement("buton");
  const nextMonthButton = document.createElement("buton");
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  calendarToolbar.classList.add("calendar-bar");
  calendarToolbar.id = ("calendarToolbar");
  calendarMonth.classList.add("calendar-bar__month");
  calendarYear.classList.add("calendar-bar__year");
  prevMonthButton.classList.add("calendar-bar__perv-month-btn");
  prevMonthButton.id ="prev-month-btn";
  nextMonthButton.classList.add("calendar-bar__next-month-btn");
  nextMonthButton.id = "next-month-btn";


  const getCurrentMonth = function(monthString) {
    monthString = monthNames[monthString.getMonth()];
    return monthString;
  };

  const getCurrentYear = function(yearString) {
    return yearString.getFullYear();
  };
  
  calendarMonth.textContent = `${getCurrentMonth(currentDate)}`;
  calendarYear.textContent = `${getCurrentYear(currentDate)}`;

  calendarToolbar.appendChild(prevMonthButton);
  calendarToolbar.appendChild(calendarMonth);
  calendarToolbar.appendChild(calendarYear);
  calendarToolbar.appendChild(nextMonthButton);
  appElement.prepend(calendarToolbar);
};

export default renderBar;
