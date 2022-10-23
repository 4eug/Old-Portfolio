import { motion } from "framer-motion";

function ConnectButton() {
  return (
    <a href="mailto:debraheug@gmail.com">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="black  md:block hover:bg-black hover:text-white"
      >
        <span className="font-medium ">CONNECT WITH ME</span>
      </motion.button>
    </a>
  );
}

export default ConnectButton;
