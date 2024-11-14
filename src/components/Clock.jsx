import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();

    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${meridiem}`;
  }

  return (
    <div className="text-center">
      <span>{formatTime()}</span>
    </div>
  );
}

export default Clock;
