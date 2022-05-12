import { useEffect, useRef, useState } from "react";

function Countdown(props) {
  const hDate = props.date;
  const [now, setNow] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerHour = 1000 * 60 * 60;
  const msPerMinute = 1000 * 60;
  const msPerSecond = 1000;
  let id = useRef(0);

  useEffect(() => {
    id.current = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    let dif = parseInt(hDate - now);
    if(dif <= 0) {
      props.setFinished(true);
      clearInterval(id);
    }
    else {
      setDays(parseInt(dif / msPerDay));
      dif -= days * msPerDay;
      setHours(parseInt(dif / msPerHour));
      dif -= hours * msPerHour;
      setMinutes(parseInt(dif / msPerMinute));
      dif -= minutes * msPerMinute;
      setSeconds(parseInt(dif / msPerSecond));
    }
  }, [days, hDate, hours, minutes, msPerDay, msPerHour, msPerMinute, now, props]);

  return (
    <h2 className="countdown_text">
      {days} {days === 1 ? "Day" : "Days"} {hours}{" "}
      {hours === 1 ? "Hour" : "Hours"} {minutes}{" "}
      {minutes === 1 ? "Minute" : "Minutes"} {seconds}{" "}
      {seconds === 1 ? "Second" : "Seconds"}
    </h2>
  );
}
export default Countdown;
