/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";
import Link from "next/link";

function AboutButton() {
  return (
    <Link href="/about">
    <a>
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="white hidden md:block"
    >
      <span className="font-medium text-base">About Me</span>
    </motion.button>
  </a>
  </Link>
  );
}

export default AboutButton;
