import { useEffect, useState } from "react";

function Countdown() {
  const hDate = new Date(2022, 3, 1, 19);
  const [now, setNow] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerHour = 1000 * 60 * 60;
  const msPerMinute = 1000 * 60;
  const msPerSecond = 1000;

  useEffect(() => {
    let id = setInterval(() => {
        setNow(new Date());
      }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    let dif = parseInt(hDate - now);
    setDays(parseInt(Math.floor(dif / msPerDay)));
    dif -= days * msPerDay;
    setHours(parseInt(Math.floor(dif / msPerHour)));
    dif -= hours * msPerHour;
    setMinutes(parseInt(Math.floor(dif / msPerMinute)));
    dif -= minutes * msPerMinute;
    setSeconds(parseInt(Math.floor(dif / msPerSecond)));
  }, [now]);

  return (
    <p className="text_countdown">
      {days}d {hours}h {minutes}m {seconds}s
    </p>
  );
}
export default Countdown;