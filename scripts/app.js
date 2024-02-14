
initClock(document.getElementById("ttidfajr"), 6, 30);
initClock(document.getElementById("ttidzuhr"), 12, 30);
initClock(document.getElementById("ttidasr"), 3, 45);
initClock(document.getElementById("ttidmaghrib"), 5, 25);
initClock(document.getElementById("ttidisah"), 7, 30);


function initClock(item, hour, min) {

  setInterval(setClock, 1000)

  const hourHand = item.querySelector('[data-hour-hand]')
  const minuteHand = item.querySelector('[data-minute-hand]')

  function setClock() {
    
    const minutesRatio = min / 60
    const hoursRatio = (minutesRatio + hour) / 12  
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
  }

  function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }

  setClock()
}