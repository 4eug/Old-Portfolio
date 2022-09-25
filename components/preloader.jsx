import React from "react";
import {motion} from "framer-motion";
import Meta from "./utilities/meta/meta";

export default function Preloader( ) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };
    return (
        <>
        <Meta title="4eug Portfolio" />
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="flex justify-center items-center h-screen">
            <svg width="108" height="63" viewBox="0 0 1348 903" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_192_788)">
                    <path d="M1269.47 597.084C1067.4 636.957 885.117 744.938 753.064 903L473.963 776.62C495.082 693.343 516.152 610.106 537.172 526.91C406.03 637.196 261.609 730.65 107.273 805.096C93.592 811.837 79.9511 818.268 66.35 824.39L0 503.488C51.2433 474.593 105.657 439.655 182.089 390.329C272.22 332.269 344.434 281.477 394.002 245.762C479.168 184.351 587.099 102.57 708.641 0L958.216 164.19L897.43 400.02C949.854 376.232 1003.6 355.468 1058.4 337.832C1109.43 321.38 1157.66 308.847 1202.17 299.245C1224.58 398.515 1247.02 497.795 1269.47 597.084Z" fill="#FF5833" />
                    <path d="M1224.99 293.143L1280.57 280.011C1303.03 379.321 1325.5 478.611 1348 577.881L1291.16 591.072L1224.99 293.143Z" fill="#FF5833" />
                </g>
                <defs>
                    <clipPath id="clip0_192_788">
                        <rect width="1348" height="903" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </motion.div></>
    )
}
