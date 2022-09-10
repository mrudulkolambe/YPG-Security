import React, { useState } from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import { useAssetContext } from '../context/Asset'
import { useUtilsContext } from '../context/Utlis'
import { v4 as uuidv4 } from 'uuid';

const AddAsset = () => {

	const { addAssets } = useAssetContext();
	const { uploadMedia } = useUtilsContext()
	const [uploadLoading, setUploadLoading] = useState(false)

	const initialState = {
		carname: "",
		carmodel: "",
		platenumber: "",
		carimage: "asdasdasd",
	}
	const [formData, setFormData] = useState(initialState);

	const handleChange = (evt) => {
		const value = evt.target.value;
		setFormData({
			...formData,
			[evt.target.name]: value
		});
	}

	const submitForm = () => {
		addAssets(formData)
	}

	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<div>
						<h1 className='uppercase font-bold text-2xl'>Add Asset</h1>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>View Employee</button>
					</div>
					<div className='w-full mb-16'>
						<div className='py-5 px-5 bg-white rounded-md shadow-md'>
							<p className='mb-3 font-bold text-lg'>Add Asset</p>
							<div className='grid grid-cols-2 gap-x-6 gap-y-3 text-sm mt-4'>
								<div>
									<label htmlFor="carname">Car Name: </label>
									<input value={formData.carname} onChange={handleChange} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="carname" id="carname" />
								</div>
								<div>
									<label htmlFor="carmodel">Car Model: </label>
									<input value={formData.carmodel} onChange={handleChange} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="carmodel" id="carmodel" />
								</div>
								<div>
									<label htmlFor="email">Plate Number: </label>
									<input value={formData.platenumber} onChange={handleChange} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="platenumber" id="platenumber" />
								</div>
								<div>
									<label htmlFor="carimage">Car Image: </label>
									<input onChange={(e) => { uploadMedia(e.target.files[0], `assets/${uuidv4()}`, formData, setFormData, setUploadLoading, 'asset') }} type="file" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="carimage" id="carimage" />
									<p className='text-xs text-gray-500'>{'Choose <2MB image size'}</p>
								</div>
							</div>
							<button disabled={uploadLoading} onClick={submitForm} className='disabled:bg-indigo-300 mt-3 bg-indigo-500 px-4 py-1.5 rounded-md text-white hover:bg-indigo-600 duration-300'>Save Asset</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AddAsset