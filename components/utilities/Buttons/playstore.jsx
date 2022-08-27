import { motion } from "framer-motion";

function PlaystoreBtn(props) {
  return (
    <a href={props.href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="white md:block"
      >
        
        <svg width="16" height="17" viewBox="0 0 16 17" className="inline-block" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.757475 17C0.532068 16.8981 0.340913 16.7344 0.206662 16.5284C0.0724105 16.3223 0.000690383 16.0825 0 15.8374L0 1.16488C0.000764758 0.919024 0.0728775 0.678559 0.207767 0.472062C0.342657 0.265565 0.53465 0.10172 0.760929 0L9.63709 8.49858L0.757475 17ZM2.75074 16.5576L10.4026 9.23075L12.4534 11.1944L2.75132 16.5576H2.75074ZM13.4233 10.6587L11.1664 8.49858L13.421 6.3402L15.469 7.47262C15.6321 7.58941 15.7652 7.74254 15.8574 7.91963C15.9497 8.09671 15.9985 8.29278 16 8.49198C16.0014 8.69119 15.9555 8.88794 15.8658 9.06632C15.7762 9.24471 15.6453 9.39972 15.4839 9.51884L13.4227 10.6575L13.4233 10.6587ZM10.402 7.7664L2.75362 0.442949L12.4523 5.80388L10.4032 7.76583L10.402 7.7664Z" 
        fill="currentColor"/>
        </svg>
            <span className="pl-1">PlayStore</span>
      </motion.button>
    </a>
  );
}

export default PlaystoreBtn;
