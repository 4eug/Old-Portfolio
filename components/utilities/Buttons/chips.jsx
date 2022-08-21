/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

function Chips(props) {
  return (
    <a href={props.href}>
      <button
        whileHover={{ scale: 1.05 }}
        className="chips md:block"
      >
        <div className="pl-10 pr-3 h-4 w-4  relative">
        <Image
            layout="fill"
            objectFit="contain"
            priority
            src={props.src}
            alt="mini-icons"
          />
          <span className="">{props.names}</span>
        </div>
        
      </button>
    </a>
  );
}

export default Chips;

