import { motion } from "framer-motion";

function ConnectButton() {
  return (
    <a href="mailto:debraheug@gmail.com">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="black  md:block"
      >
        <span className="font-medium ">CONNECT WITHME</span>
      </motion.button>
    </a>
  );
}

export default ConnectButton;
