import React from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import { useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import Clock from '../component/Clock'

const AssignJobs = () => {

	const initialState = {
		selectaddress: "",
		address: "",
		jobno: "",
		zone: "",
		latitude: "",
		longitude: "",
		clientname: "",
		clientphonenumber: "",
		remark: "",
		timestamp: moment().format('llll')
	}
	const [formData, setFormData] = useState(initialState)
	const handleFormData = (evt) => {
		const value = evt.target.value;
		setFormData({
			...formData,
			[evt.target.name]: value
		});
	}

	const submitForm = () => {
		axios({
			url: 'http://localhost:8080/jobs/add-job',
			method: 'post',
			data: formData
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
	}

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
					<div className='font-bold text-2xl mb-2 flex'>JOB ASSIGN -&nbsp;{<Clock />}</div>
					<div className='w-full mb-16 flex gap-5 h-full'>
						<div className='w-7/12'>
							<div className=' aspect-video bg-white shadow-md rounded-md p-2 h-max'>
								<img src="/bg.jpg" alt="" className='rounded-md' />
							</div>
							<div className='flex mt-2'>
								<span className='font-bold mr-2'>Target: </span>
								<p className='mr-2'>Current Lat: </p>
								<p>Current Lng: </p>
							</div>
							<div className='mt-3'>
								<h1 className='font-bold text-xl'>Employee Status</h1>
								<table className='w-full text-sm my-2 rounded-sm overflow-hidden shadow-md'>
									<tr className='bg-white rounded-sm shadow-md border-b'>
										<th className='text-gray-500 py-2 px-2'>Username</th>
										<th className='text-gray-500 py-2 px-2'>Latitude</th>
										<th className='text-gray-500 py-2 px-2'>Longitude</th>
										<th className='text-gray-500 py-2 px-2'>Distance</th>
										<th className='text-gray-500 py-2 px-2'>Status</th>
										<th className='text-gray-500 py-2 px-2'>Manual Assign</th>
									</tr>
									<tr className='mt-3 text-center bg-white rounded-sm shadow-md'>
										<td className='text-gray-500 py-2 px-2'>Username</td>
										<td className='text-gray-500 py-2 px-2'>Latitude</td>
										<td className='text-gray-500 py-2 px-2'>Longitude</td>
										<td className='text-gray-500 py-2 px-2'>Distance</td>
										<td className='text-gray-500 py-2 px-2'>Status</td>
										<td className='text-gray-500 py-2 px-2'>Manual Assign</td>
									</tr>
								</table>
							</div>
						</div>
						<div className='w-5/12 bg-white p-4  shadow-md rounded-md text-sm'>
							<div>
								<label htmlFor="selectaddress" className='font-bold text-gray-500'>Select Address</label>
								<input onChange={handleFormData} value={formData.selectaddress} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="selectaddress" id="selectaddress" placeholder='Enter a location' />
							</div>
							<div className='mt-4'>
								<label htmlFor="address" className='font-bold text-gray-500'>Address</label>
								<textarea onChange={handleFormData} value={formData.address} className='resize-none h-32 rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="address" id="address" placeholder='Enter a location' ></textarea>
							</div>
							<div className='mt-4'>
								<label htmlFor="jobno" className='font-bold text-gray-500'>Job No.</label>
								<input onChange={handleFormData} value={formData.jobno} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="jobno" id="jobno" placeholder='' />
							</div>
							<div className='mt-4'>
								<label htmlFor="zone" className='font-bold text-gray-500'>Zone</label>
								<input onChange={handleFormData} value={formData.zone} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="zone" id="zone" placeholder='' />
							</div>
							<div className='grid grid-cols-2 gap-x-5'>
								<div className='mt-4'>
									<label htmlFor="latitude" className='font-bold text-gray-500'>Latitude</label>
									<input onChange={handleFormData} value={formData.latitude} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="latitude" id="latitude" placeholder='' />
								</div>
								<div className='mt-4'>
									<label htmlFor="longitude" className='font-bold text-gray-500'>Longitude</label>
									<input onChange={handleFormData} value={formData.longitude} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="longitude" id="longitude" placeholder='' />
								</div>
							</div>
							<div className='mt-4'>
								<label htmlFor="clientname" className='font-bold text-gray-500'>Client Name</label>
								<input onChange={handleFormData} value={formData.clientname} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="clientname" id="clientname" placeholder='' />
							</div>
							<div className='mt-4'>
								<label htmlFor="clientphonenumber" className='font-bold text-gray-500'>Client Phone Number</label>
								<input onChange={handleFormData} value={formData.clientphonenumber} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="clientphonenumber" id="clientphonenumber" placeholder='' />
							</div>
							<div className='mt-4'>
								<label htmlFor="remark" className='font-bold text-gray-500'>Remark</label>
								<input onChange={handleFormData} value={formData.remark} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-1 w-full py-2 px-4 border-2 outline-none' name="remark" id="remark" placeholder='' />
							</div>
							<button type='button' onClick={submitForm} className='mt-3 bg-indigo-500 px-4 py-1.5 rounded-md text-white hover:bg-indigo-600 duration-300'>Save Job</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AssignJobs