import { useState, useRef, useEffect } from "react";
import "./Promo.css";
import { motion, useAnimation } from "framer-motion";
import { IoClose } from "react-icons/io5";
import promoVideo from "../../../assets/videos/promo-clip.mp4";
import thumbnail from "../../../assets/images/promo-thumb.jpg";
import { FaPlay } from "react-icons/fa";

const Promo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const moveButton = (event) => {
      const rect = container.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxMove = 100;

      const moveX = Math.min(Math.max(offsetX - centerX, -maxMove), maxMove);
      const moveY = Math.min(Math.max(offsetY - centerY, -maxMove), maxMove);

      controls.start({ x: moveX, y: moveY, transition: { duration: 0.1, ease: "easeInOut" } });
    };

    const resetButton = () => {
      controls.start({ x: 0, y: 0, transition: { duration: 0.2, ease: "easeOut" } });
    };

    container.addEventListener("mousemove", moveButton);
    container.addEventListener("mouseleave", resetButton);

    return () => {
      container.removeEventListener("mousemove", moveButton);
      container.removeEventListener("mouseleave", resetButton);
    };
  }, [controls]);

  useEffect(() => {
    if (isModalOpen) {
      scrollPosition.current = window.pageYOffset;
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";

      const preventZoomAndScroll = (event) => {
        if (event.ctrlKey || event.type === "touchmove") {
          event.preventDefault();
        }
      };

      document.addEventListener("wheel", preventZoomAndScroll, { passive: false });
      document.addEventListener("keydown", preventZoomAndScroll);
      document.addEventListener("touchmove", preventZoomAndScroll, { passive: false });

      const video = videoRef.current;
      if (video) {
        video.addEventListener("fullscreenchange", () => {
          if (!document.fullscreenElement) {
            window.scrollTo(0, scrollPosition.current);
          }
        });
      }

      return () => {
        document.body.classList.remove("modal-open");
        document.body.style.overflow = "auto";
        document.removeEventListener("wheel", preventZoomAndScroll);
        document.removeEventListener("keydown", preventZoomAndScroll);
        document.removeEventListener("touchmove", preventZoomAndScroll);
      };
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => videoRef.current?.play(), 300);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="promo-container" ref={containerRef}>
      <div className="promo-video-wrapper">
        {!isModalOpen && <img src={thumbnail} alt="Video Thumbnail" className="promo-thumbnail" />}

        <motion.button className="play-button" onClick={openModal} animate={controls} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaPlay />
        </motion.button>
      </div>
      {isModalOpen && (
        <motion.div className="video-modal" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <button className="close-button" onClick={closeModal}>
            <IoClose size={30} />
          </button>
          <video ref={videoRef} controls autoPlay>
            <source src={promoVideo} type="video/mp4" />
          </video>
        </motion.div>
      )}
    </div>
  );
};

export default Promo;
