import React, { useEffect } from "react";
import gsap from "gsap";
import Textify from "textify.js"; // Adjust this path to where Textify is located

const TextifyText = ({ className, children }) => {
  useEffect(() => {
    new Textify(
      {
        el: `.${className}`,
        animation: {
          stagger: 0.05,
          duration: 0.7,
          ease: "power2",
          animateProps: { y: "0", x: "100%", opacity: 0, skewX: -45 },
        },
      },
      gsap
    );
  }, [className]);

  return <div className={className}>{children}</div>;
};

export default TextifyText;
