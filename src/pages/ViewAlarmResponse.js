import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import moment from 'moment'

const ViewAlarmResponse = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios({
			url: 'http://localhost:8080/alarm/',
			method: 'get'
		})
			.then((res) => {
				setData(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, []);
	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<div>
						<h1 className='uppercase font-bold text-2xl'>Alarm Response</h1>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>Add Asset</button>
					</div>
					<div className='w-full bg-white py-5 px-5 mb-16 shadow-md rounded-md'>
						<div className='w-full flex justify-end mb-5 items-center'><label htmlFor="filter" className='text-sm mr-3 text-gray-500'>Search: </label><input id='filter' type="text" className='border rounded-md outline-none font-normal text-sm px-3 py-2' placeholder='Search...' /></div>
						<table className='w-full text-sm'>
							<tr className='w-full text-left border'>
								<th className='w-1/12 font-bold py-3 px-2 border-r'>View Report</th>
								<th className='w-1/12 font-bold py-3 px-2 border-r'>Job No.</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Client Name</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Zone</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Employee</th>
								<th className='w-1/12 font-bold py-3 px-2 border-r'>Date Time</th>
								<th className='w-1/12 font-bold py-3 px-2 border-r'>Status</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Attendance Note</th>
							</tr>
							{
								data && data.map((item) => {
									return <tr key={item._id} className='w-full text-left border'>
										<td className='w-1/12 py-3 px-2 border-r'>View Report</td>
										<td className='w-1/12 py-3 px-2 border-r'>{item.jobno}</td>
										<td className='w-2/12 py-3 px-2 border-r'>{item.clientname}</td>
										<td className='w-2/12 py-3 px-2 border-r'>{item.zone}</td>
										<td className='w-2/12 py-3 px-2 border-r'>{item.attendingofficer}</td>
										<td className='w-1/12 py-3 px-2 border-r'>{moment(item.timestamp).format('ddd Do MMM YYYY')}</td>
										<td className='w-1/12 py-3 px-2 border-r'>{item.status || "Status"}</td>
										<td className='w-2/12 py-3 px-2 border-r'>{item.attendancenotes}</td>
									</tr>
								})
							}

						</table>
						<p className='hidden font-bold text-sm text-gray-500 mt-4'>Showing 0 to 0 of 0 entries</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default ViewAlarmResponse