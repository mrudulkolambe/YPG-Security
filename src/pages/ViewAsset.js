import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import { useAssetContext } from '../context/Asset'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ViewAsset = () => {
	const [assets, setAssets] = useState([])
	const navigate = useNavigate()
	useEffect(() => {
		axios({
			url: 'http://localhost:8080/assets/',
			method: 'get'
		})
			.then((res) => {
				setAssets(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<div>
						<h1 className='uppercase font-bold text-2xl'>Assets</h1>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>Add Asset</button>
					</div>
					<div className='w-full bg-white py-5 px-5 mb-16'>
						<div className='w-full flex justify-end mb-5 items-center'><label htmlFor="filter" className='text-sm mr-3 text-gray-500'>Search: </label><input id='filter' type="text" className='border rounded-md outline-none font-normal text-sm px-3 py-2' placeholder='Search...' /></div>
						<table className='w-full text-sm'>
							<tr className='w-full text-left border'>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Car Name</th>
								<th className='w-6/12 font-bold py-3 px-2 border-r'>Car Model</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Plate Number</th>
								<th className='w-2/12 font-bold py-3 px-2 border-r'>Action</th>
							</tr>
							{
								assets && assets.map((asset, i) => {
									return <tr className={i % 2 === 0 ? 'w-full text-left border' : 'w-full text-left border bg-blue-100 bg-opacity-70'
									}>
										<td className='w-2/12 font-light py-3 px-2 border-r'>{asset.carname}</td>
										<td className='w-6/12 font-light py-3 px-2 border-r'>{asset.carmodel}</td>
										<td className='w-2/12 font-light py-3 px-2 border-r'>{asset.platenumber}</td>
										<td className='w-2/12 font-light py-3 px-2 border-r flex'><span className="mx-1 cursor-pointer text-indigo-600 hover:text-white bg-white border border-indigo-600 hover:border-transparent duration-150 rounded-md p-2 hover:bg-indigo-600"><AiOutlineDelete /></span><span onClick={() => { navigate(`/update-asset/${asset._id}`) }} className="mx-1 cursor-pointer text-indigo-600 hover:text-white bg-white border border-indigo-600 hover:border-transparent duration-150 rounded-md p-2 hover:bg-indigo-600"><BsPencil /></span></td>
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

export default ViewAsset