import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import Topbar from '../component/Topbar'
import { useAuthContext } from '../context/Auth'
import { useEmployeeContext } from '../context/Employee'
import { db, employeeAuth } from '../context/firebase_config'
import { useUtilsContext } from '../context/Utlis'
import { v4 as uuidv4 } from 'uuid';

const AddEmployee = () => {
	const { addEmployee } = useEmployeeContext()
	const [uploadLoading, setUploadLoading] = useState(false)
	const { handleSignIn } = useAuthContext()
	const { uploadMedia } = useUtilsContext()
	const initialState = {
		firstname: "",
		lastname: "",
		email: "",
		username: "",
		password: "",
		confirmpassword: "",
		phonenumber: "",
		drivinglicense: "",
		securitylicense: "",
		profileimage: "asdasd",
		documentimage: "asdasd",
		address: ""
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
		if (formData.confirmpassword === formData.password) {
			createUserWithEmailAndPassword(employeeAuth, formData.email, formData.password)
				.then(async (userCredential) => {
					const user = userCredential.user;
					await setDoc(doc(db, "users", user.uid), {
						name: `${formData.firstname} ${formData.lastname}`,
						email: formData.email,
						role: "employee",
						uid: user.uid
					});
					addEmployee(formData)
					setFormData(initialState)
				})
				.catch((error) => {

				});
		} else {

		}
	}
	return (
		<>
			<Sidebar />
			<Topbar />
			<div className='z-0 page-dimension'>
				<div className='px-5 py-6 h-full w-full'>
					<div>
						<h1 className='uppercase font-bold text-2xl'>Add Employees</h1>
					</div>
					<div className='flex justify-end my-3'>
						<button className='duration-200 border rounded-md px-2 py-1 hover:text-white text-indigo-400 border-indigo-400 hover:border-transparent hover:bg-indigo-400 text-sm'>View Employee</button>
					</div>
					<div className='w-full mb-16'>
						<div className='py-5 px-5 bg-white rounded-md shadow-md'>
							<p className='mb-3 font-bold text-lg'>Add Employee - General Info</p>
							<div className='grid grid-cols-2 gap-x-6 gap-y-3 text-sm mt-4'>
								<div>
									<label htmlFor="firstname">First Name: </label>
									<input value={formData.firstname} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="firstname" id="firstname" />
								</div>
								<div>
									<label htmlFor="lastname">Last Name: </label>
									<input value={formData.lastname} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="lastname" id="lastname" />
								</div>
								<div>
									<label htmlFor="email">Email: </label>
									<input value={formData.email} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="email" id="email" />
								</div>
								<div>
									<label htmlFor="username">Username: </label>
									<input value={formData.username} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="username" id="username" />
									<p className='text-xs text-gray-500'>Allowed only letters, digits and @, +, -, _</p>
								</div>
								<div>
									<label htmlFor="password">Password: </label>
									<input value={formData.password} onChange={handleFormData} type="password" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="password" id="password" />
								</div>
								<div>
									<label htmlFor="confirmpassword">Confirm Password: </label>
									<input value={formData.confirmpassword} onChange={handleFormData} type="password" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="confirmpassword" id="confirmpassword" />
								</div>
							</div>
						</div>
						<div className='py-5 px-5 bg-white rounded-md shadow-md mt-6'>
							<p className='mb-3 font-bold text-lg'>Personal Information</p>
							<div className='grid grid-cols-2 gap-x-6 gap-y-3 text-sm'>
								<div>
									<label htmlFor="phonenumber">Phone Number: </label>
									<input value={formData.phonenumber} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="phonenumber" id="phonenumber" />
								</div>
								<div>
									<label htmlFor="drivinglicense">Driving License: </label>
									<input value={formData.drivinglicense} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="drivinglicense" id="drivinglicense" />
								</div>
								<div>
									<label htmlFor="securitylicense">Security License: </label>
									<input value={formData.securitylicense} onChange={handleFormData} type="text" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="securitylicense" id="securitylicense" />
								</div>
								<div>
									<label htmlFor="profileimage">Profile Picture: </label>
									<input onChange={(e) => { uploadMedia(e.target.files[0], `employee/${uuidv4()}`, formData, setFormData, setUploadLoading, 'profile_picture') }} type="file" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="profileimage" id="profileimage" />
								</div>
								<div>
									<label htmlFor="documentimage">Document Image: </label>
									<input onChange={(e) => { uploadMedia(e.target.files[0], `employee/${uuidv4()}`, formData, setFormData, setUploadLoading, 'document_image') }} type="file" className='rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none' name="documentimage" id="documentimage" />
								</div>
							</div>
							<div className='text-sm mt-3'>
								<label htmlFor="address">Address: </label>
								<textarea name="address" value={formData.address} onChange={handleFormData} id="address" className='h-32 resize-none rounded-md duration-200 focus:border-gray-500 mt-2 w-full py-2 px-4 border-2 outline-none'></textarea>
							</div>
							<button disabled={uploadLoading} onClick={submitForm} className='disabled:bg-indigo-300 mt-4 bg-indigo-500 px-4 py-1.5 rounded-md text-white hover:bg-indigo-600 duration-300'>Save Employee</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AddEmployee