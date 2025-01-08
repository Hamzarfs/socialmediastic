import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the FaArrowUp icon from react-icons/fa
import "../ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-to-top btn btn-primary"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp /> {/* Use the FaArrowUp icon here */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
