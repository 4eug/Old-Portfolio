import { motion } from "framer-motion";

function AboutButton() {
  return (
    <a href="mailto:debraheug@gmail.com">
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
