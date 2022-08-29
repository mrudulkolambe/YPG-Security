import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'

const ViewJobs = () => {
	const [jobs, setJobs] = useState([])

	useEffect(() => {
		axios({
			url: 'http://localhost:8080/jobs/',
			method: 'get'
		})
			.then((res) => {
				setJobs(res.data)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<div>
						<h1 className='uppercase font-bold text-2xl'>Jobs</h1>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>Add Asset</button>
					</div>
					<div className='w-full bg-white py-5 px-5 mb-16 rounded-md shadow-md'>
						<div className='w-full flex justify-end mb-5 items-center'><label htmlFor="filter" className='text-sm mr-3 text-gray-500'>Search: </label><input id='filter' type="text" className='border rounded-md outline-none font-normal text-sm px-3 py-2' placeholder='Search...' /></div>
						<table className='w-full text-sm'>
							<tr className='w-full text-left border'>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Job No.</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Client Name</th>
								<th className='w-6/12 font-bold py-3 px-2 border-r'>Address</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Date Time</th>
							</tr>
							{
								jobs && jobs.map((job, i) => {
									return <tr className={i % 2 === 0 ? 'w-full text-left border' : 'w-full text-left border bg-blue-50'}>
										<td className='w-2/12 font-light py-3 px-2 border-r'>{job.jobno}</td>
										<td className='w-2/12 font-light py-3 px-2 border-r'>{job.clientname}</td>
										<td className='w-6/12 font-light py-3 px-2 border-r'>{job.address}</td>
										<td className='w-2/12 font-light py-3 px-2 border-r'>{job.timestamp}</td>
									</tr>
								})
							}
						</table>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default ViewJobs