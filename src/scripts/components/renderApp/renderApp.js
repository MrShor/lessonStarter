import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
  const appElement = document.getElementById("appRoot");
  let currentDate = new Date();
  // let unixTime = Date.parse(new Date());

  const objectTime = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDay(),
  };

  // console.log(new Date(objectTime.year, objectTime.month, objectTime.day));
  // currentDate = new Date(objectTime.year, objectTime.month, objectTime.day);
  // console.log(currentDate.toISOString());
  // console.log(new Date(2021, 1, 2).toISOString());
  // console.log( new Date (Date.parse(currentDate.toISOString())));


  renderCalendar({ appElement, currentDate, objectTime });
  renderBar({ appElement, currentDate, objectTime });

  document.getElementById("prev-month-btn").addEventListener("click", function() {
    console.log(objectTime.month);
    objectTime.month = objectTime.month - 1;
    currentDate = new Date(objectTime.year, objectTime.month, objectTime.day);
    console.log(objectTime);
 
    let lastDayOfMonth = new Date(objectTime.year, objectTime.month +1, 0).getDate();
    console.log('last ', lastDayOfMonth);
  });
  document.getElementById("next-month-btn").addEventListener("click", function() {
    objectTime.month = objectTime.month + 1;
    currentDate = new Date(objectTime.year, objectTime.month, objectTime.day);
    console.log(objectTime);

    let lastDayOfMonth = new Date(objectTime.year, objectTime.month +1, 0).getDate();
    console.log('last ', lastDayOfMonth);
  });
};

export default renderApp;
