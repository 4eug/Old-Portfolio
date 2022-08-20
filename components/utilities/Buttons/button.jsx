import { motion } from "framer-motion";

function AboutButton() {
  return (
    <a href="/about">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="white hidden md:block"
      >
        <span className="font-medium text-base">About Me</span>
      </motion.button>
    </a>
  );
}

export default AboutButton;
