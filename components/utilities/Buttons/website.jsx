import { motion } from "framer-motion";

function WebsiteBtn(props) {
  return (
    <a href={props.href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="white md:block"
      >
        
        <svg width="19" height="19" viewBox="0 0 19 19" className="inline-block" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9.5C18 14.1944 14.1944 18 9.5 18M18 9.5C18 4.80558 14.1944 1 9.5 1M18 9.5H1M9.5 18C4.80558 18 1 14.1944 1 9.5M9.5 18C11.6261 15.6724 12.8343 12.6518 12.9 9.5C12.8343 6.34823 11.6261 3.3276 9.5 1M9.5 18C7.37391 15.6724 6.16566 12.6518 6.1 9.5C6.16566 6.34823 7.37391 3.3276 9.5 1M1 9.5C1 4.80558 4.80558 1 9.5 1"
             stroke="currentColor"
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
            </svg>
            <span className="pl-1">Website</span>
      </motion.button>
    </a>
  );
}

export default WebsiteBtn;
