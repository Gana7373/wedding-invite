import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Card.css";
import bg from "../assets/bg.jpg";

import CountdownTimer from "./CountdownTimer";
import LocationMap from "./LocationMap";

const Card = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.7;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => console.log("Autoplay blocked"));
      }
    }, 300);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="container">
      {/* 🎵 Music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {!open ? (
        <div className="open-screen">
          <button className="open-btn" onClick={handleOpen}>
            💌 Open Invitation
          </button>
        </div>
      ) : (
        <>
          <button className="music-control" onClick={toggleMusic}>
            {isPlaying ? "🔊 Pause" : "▶ Play"}
          </button>

          <motion.div
            className="cinematic"
            style={{ backgroundImage: `url(${bg})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="overlay"></div>
            <div className="particles"></div>

            <div className="card">
              <h2 className="heading">Wedding Invitation</h2>

              <h1 className="names">
                Mallikarjuna <span>❤️</span> Radhika
              </h1>

              <div className="couple-images">
                <img src="/assets/groom.jpeg" alt="groom" />
                <img src="/assets/bride.jpeg" alt="bride" />
              </div>

              <p className="text">
                Together with their families invite you to celebrate love
              </p>

              <p className="date">May 6th, 2026</p>
              <p className="time">8:30 AM - 9:30 AM</p>

              <p className="venue">
                At Groom's Home <br />
                Peddahulthi Village <br />
                Pattikonda Mandal, Kurnool District
              </p>

              {/* ✅ SAFE ADD */}
              <div style={{ marginTop: "6px" }}>
                <CountdownTimer />
                <div style={{ height: "110px", marginTop: "6px" }}>
                  <LocationMap />
                </div>
              </div>

              <p className="footer">
                We can't wait to celebrate with you ✨
              </p>

              <button
                className="share-btn"
                onClick={() => {
                  const text = `You're invited to Mallikarjuna ❤️ Radhika Wedding 💍
📅 May 6th, 2026
🕘 8:30 AM - 9:30 AM
📍 Peddahulthi Village, Kurnool`;

                  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
                  window.open(url, "_blank");
                }}
              >
                📲 Share on WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Card;  