import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const weddingDate = new Date("May 6, 2026 08:30:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTime("🎉 Happening Now!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      // format with leading zeros
      const format = (num) => String(num).padStart(2, "0");

      setTime(
        `⏳ ${format(days)}d : ${format(hours)}h : ${format(minutes)}m : ${format(seconds)}s`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p style={{ fontSize: "13px", margin: "4px 0" }}>
      {time}
    </p>
  );
};

export default CountdownTimer;