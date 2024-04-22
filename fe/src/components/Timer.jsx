const { useState, useEffect } = require("react");

const Timer = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    const updateTimer = () => {
      console.log("hii");
      console.log(hours, minutes, seconds);
      if (seconds > 0) {
        setSeconds(seconds - 1);
        console.log("first if");
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setSeconds(59);
        setMinutes(59);
        setHours(hours - 1);
      } else {
        setIsRunning(false);
        clearInterval(intervalId);
        onTimerFinish(); // Call function when timer finishes
      }
    };
    setInterval(updateTimer, 1000); // Update every second
  };
  startTimer();
  const onTimerFinish = () => {
    console.log("finished");
  };

  // JSX to display timer and controls (hours, minutes, seconds, start, pause, reset buttons)

  return (
    <div>
      <div>{hours}</div>
      <div>{minutes}</div>
      <div>{seconds}</div>
    </div>
  );
};

export default Timer;
