import React from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'

const AssignJobs = () => {
	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<div>
					<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>Reload Page</button>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>View Employee</button>
					</div>
					<div className='font-bold text-2xl mb-2'>JOB ASSIGN - 11:27:45AM</div>
					<div className='w-full mb-16 flex gap-5 h-full'>
						<div className='w-7/12 aspect-video bg-white shadow-md rounded-md'>asd</div>
						<div className='w-5/12 bg-white p-4  shadow-md rounded-md text-sm'>
							<div>
								<label htmlFor="selectaddress" className='font-bold text-gray-500'>Select Address</label>
								<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="selectaddress" id="selectaddress" placeholder='Enter a location' />
							</div>
							<div className='mt-4'>
								<label htmlFor="address" className='font-bold text-gray-500'>Address</label>
								<textarea  className='resize-none h-32 rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="address" id="address" placeholder='Enter a location' ></textarea>
							</div>
							<div className='mt-4'>
								<label htmlFor="jobno" className='font-bold text-gray-500'>Job No.</label>
								<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="jobno" id="jobno" placeholder='' />
							</div>
							<div className='mt-4'>
								<label htmlFor="zone" className='font-bold text-gray-500'>Zone</label>
								<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="zone" id="zone" placeholder='' />
							</div>
							<div className='grid grid-cols-2 gap-x-5'>
								<div className='mt-4'>
									<label htmlFor="latitude" className='font-bold text-gray-500'>Latitude</label>
									<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="latitude" id="latitude" placeholder='' />
								</div>
								<div className='mt-4'>
									<label htmlFor="longitude" className='font-bold text-gray-500'>Longitude</label>
									<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="longitude" id="longitude" placeholder='' />
								</div>
							</div>
							<div className='mt-4'>
								<label htmlFor="clientname" className='font-bold text-gray-500'>Client Name</label>
								<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="clientname" id="clientname" placeholder='' />
							</div>
							<div className='mt-4'>
								<label htmlFor="clientphonenumber" className='font-bold text-gray-500'>Client Phone Number</label>
								<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="clientphonenumber" id="clientphonenumber" placeholder='' />
							</div>
							<div className='mt-4'>
								<label htmlFor="remark" className='font-bold text-gray-500'>Remark</label>
								<input type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="remark" id="remark" placeholder='' />
							</div>
							<button className='mt-3 bg-indigo-500 px-4 py-1.5 rounded-md text-white hover:bg-indigo-600 duration-300'>Save Job</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AssignJobs