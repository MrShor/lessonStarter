const calendarToolbar = document.createElement("div");
const calendarMonth = document.createElement("span");
const calendarYear = document.createElement("span");
const prevMonthButton = document.createElement("buton");
const nextMonthButton = document.createElement("buton");
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function renderBar ({ appElement, currentDate, objectTime }){
  calendarToolbar.classList.add("calendar-bar");
  calendarToolbar.id = ("calendarToolbar");
  calendarMonth.classList.add("calendar-bar__date", "calendar-bar__date--month");
  calendarYear.classList.add("calendar-bar__date", "calendar-bar__date--year");
  prevMonthButton.classList.add("calendar-bar__button","calendar-bar__button--prev-month");
  nextMonthButton.classList.add("calendar-bar__button", "calendar-bar__button--next-month");
  prevMonthButton.id ="prev-month-btn";
  nextMonthButton.id = "next-month-btn";
  calendarMonth.id = "date-month";
  calendarYear.id = "date-year";

  calendarMonth.textContent = `${monthNames[objectTime.month]}`;
  calendarYear.textContent = `${objectTime.year}`;

  calendarToolbar.appendChild(prevMonthButton);
  calendarToolbar.appendChild(calendarMonth);
  calendarToolbar.appendChild(calendarYear);
  calendarToolbar.appendChild(nextMonthButton);
  appElement.prepend(calendarToolbar);
};

export function reRenderDate(objectTime) {
  document.getElementById("date-month").textContent = `${monthNames[objectTime.month]}`;
  document.getElementById("date-year").textContent = `${objectTime.year}`;
  console.log(objectTime);
}
