import { renderBar, reRenderDate  } from "../renderBar";
import renderCalendar from "../renderCalendar";


const renderApp = () => {
  const appElement = document.getElementById("appRoot");
  let currentDate = new Date();
  
  const objectTime = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDay(),
  };

  // console.log(currentDate.getMonth());
  // console.log (new Date(objectTime.year, objectTime.month, objectTime.day).getMonth());
  // console.log(currentDate.toISOString());
  // console.log(new Date(2021, 1, 2).toISOString());
  // console.log( new Date (Date.parse(currentDate.toISOString())));

  renderCalendar({ appElement, currentDate, objectTime });
  renderBar({ appElement, currentDate, objectTime });

  document.getElementById("prev-month-btn").addEventListener("click", function() {
    let changedDate;
    objectTime.month = objectTime.month - 1;
 
    changedDate = new Date(objectTime.year, objectTime.month);
    objectTime.year = changedDate.getFullYear();
    objectTime.month = changedDate.getMonth();
    objectTime.day = changedDate.getDay();
    
    document.getElementById("calendar-container").remove();
    renderCalendar({ appElement, currentDate, objectTime });
    reRenderDate(objectTime);
  });

  document.getElementById("next-month-btn").addEventListener("click", function() {
    let changedDate;
    objectTime.month = objectTime.month + 1;

    changedDate = new Date(objectTime.year, objectTime.month);
    objectTime.year = changedDate.getFullYear();
    objectTime.month = changedDate.getMonth();
    objectTime.day = changedDate.getDay();

    document.getElementById("calendar-container").remove();
    renderCalendar({ appElement, currentDate, objectTime });
    reRenderDate(objectTime);
  });
};

export default renderApp;
