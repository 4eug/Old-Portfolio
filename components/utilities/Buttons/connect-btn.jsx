import { motion } from "framer-motion";

function ConnectButton() {
  return (
    <a href="/about">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="black hidden md:block"
      >
        <span className="font-medium ">CONNECT WITHME</span>
      </motion.button>
    </a>
  );
}

export default ConnectButton;
