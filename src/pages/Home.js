import React from 'react'
import Footer from '../component/Footer'
import HomepageDataTop from '../component/HomepageDataTop'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import { useAlarmResponse } from '../context/AlarmResponse'
import { useAssetContext } from '../context/Asset'
import { useEmployeeContext } from '../context/Employee'

const Home = () => {
	const { employees } = useEmployeeContext()
	const { assets } = useAssetContext()
	const { alarmResponse } = useAlarmResponse()
	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='h-full w-full px-5 py-6'>
					<div className='grid grid-cols-3 gap-3'>
						<HomepageDataTop title={'Number Of Employee'} data={employees.length} icon={'users'} />
						<HomepageDataTop title={'Total Alarm Response'} data={assets.length} icon={'cars'} />
						<HomepageDataTop title={'Number Of Assets'} data={alarmResponse.length} icon={'assets'} />
					</div>
					<div className='grid grid-cols-2 gap-4 mt-4'>
						<div className='w-full h-96 bg-white shadow-lg rounded-md'></div>
						<div className='w-full h-96 bg-white shadow-lg rounded-md'></div>
					</div>
					<div className='mt-4 w-full bg-white shadow-lg rounded-md px-3 py-5'>
						<h1 className='mb-4 font-semibold text-xl'>Recent Job List</h1>
						<table className='w-full text-sm'>
							<tr className='w-full text-left border'>
								<th className='w-1/12 font-bold py-3 px-2 border-r h-16'>Job Name</th>
								<th className='w-1/12 font-bold py-3 px-2 border-r h-16'>Client Name</th>
								<th className='w-6/12 font-bold py-3 px-2 border-r h-16'>Address</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r h-16'>Date Time</th>
								<th className='w-1/12 font-bold py-3 px-2 border-r h-16'>Status</th>
								<th className='w-1/12 font-bold py-3 px-2 border-r h-16'>View Report</th>
							</tr>
							<tr className='w-full text-left border'>
								<td className='w-1/12 font-light py-3 px-2 border-r h-16'>Housekeeping</td>
								<td className='w-1/12 font-light py-3 px-2 border-r h-16'>Pratit</td>
								<td className='w-6/12 font-light py-3 px-2 border-r h-16'>Flat no 15, gayatri krupa CHS, near oak baug, kalyan west - 421301</td>
								<td className='w-2/12 font-light py-3 px-2 border-r h-16'>Wed 20-Jul-2022, 11:37 PM</td>
								<td className='w-1/12 font-light py-3 px-2 border-r h-16'>Created</td>
								<td className='w-1/12 font-light py-3 px-2 border-r h-16'></td>
							</tr>
						</table>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Home