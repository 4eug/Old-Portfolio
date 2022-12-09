import React from 'react'
import Image from 'next/image'

function Role() {
  return (
	<div className="container grid grid-cols-12 m-auto mt-20 mb-20 ">
    <div className="flex flex-col col-span-12 p-6 lg:col-span-6 lg:p-10">
        <h1 className="text-xl md:text-4xl font-bold text-oya-green">
        What did I do?
        </h1>
			<div className="pt-10 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Research & Discovery</h1>
				<p>Stakeholder engagement</p>
                <p>User Interviews</p>
                <p>Domain research</p>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Ideation & Design</h1>
				<p>Creating mind maps, user flows, information architecture</p>
                <p>Creating high fidelity mockups</p>
			</div>
            <div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Testing</h1>
				<p>User feedback</p>
			</div>
		</div>
		<div className="mt-16 flex flex-col justify-center col-span-12 align-middle lg:col-span-6 lg:h-auto">
        <Image
            src="/Process.png"
            width="621"
            height="548"
            priority
            alt=""
            /> 
		</div>
	</div>
  )
}

export default Role