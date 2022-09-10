import React from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'

const EmployeeTrack = () => {
	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<h1 className='text-3xl font-bold'>Employee Track</h1>
					<div className='rounded-md shadow-md mt-3 bg-white p-3 w-full h-fit'>

					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default EmployeeTrack