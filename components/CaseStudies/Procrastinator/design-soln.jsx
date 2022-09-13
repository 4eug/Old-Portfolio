import React from 'react'
import Image from 'next/image'

function DesignSoln() {
  return (
    <div>
        <div className="mt-4 m-auto flex justify-center items-center">
            <Image
            src="/design-soln.svg"
            width="1440"
            height="1114"
            priority
            alt=""
            />    
        </div>
    </div>
  )
}

export default DesignSoln