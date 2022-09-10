import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import moment from 'moment'

const ActivityLogs = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios({
			url: 'http://localhost:8080/logs/',
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
						<h1 className='uppercase font-bold text-2xl'>Activity Logs</h1>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>Add Employee</button>
					</div>
					<div className='w-full bg-white py-5 px-5 mb-16'>
						<div className='w-full flex justify-end mb-5 items-center'><label htmlFor="filter" className='text-sm mr-3 text-gray-500'>Search: </label><input id='filter' type="text" className='border rounded-md outline-none font-normal text-sm px-3 py-2' placeholder='Search...' /></div>
						<table className='w-full text-sm'>
							<tr className='w-full text-left border'>
								<th className='w-6/12 font-bold py-3 px-2 border-r'>Log Description</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Time Ago</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Date Time</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Status</th>
							</tr>
							{
								data && data.map((res) => {
									return <tr key={res._id} className='w-full text-left border'>
										<td className='w-6/12 font-semibold text-gray-800 py-3 px-2 border-r'>{res.logdescription}</td>
										<td className='w-2/12 font-semibold text-gray-800 py-3 px-2 border-r'>{moment(res.timestamp).fromNow()}</td>
										<td className='w-2/12 font-semibold text-gray-800 py-3 px-2 border-r'>{moment(res.timestamp).format('ddd DD-MMM-YYYY, hh:mm A')}</td>
										<td className='w-2/12 font-semibold text-gray-800 py-3 px-2 border-r'>{"GOTO"}</td>
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

export default ActivityLogs