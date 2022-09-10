import React, { createContext, useContext, useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../context/firebase_config'
import axios from "axios";


const UtilsContext = createContext();

export function UtilsContextProvider({ children }) {
	const [alert, setAlert] = useState("")


	useEffect(() => {
		if (alert && alert.length !== 0) {
			setTimeout(() => {
				setAlert('')
			}, 3000);
		}
	}, [alert]);

	const deleteObject = (route, id, message, stateVariable, setterFunction, setLoading) => {
		try {
			setLoading(true)
			let newArr = []
			stateVariable && stateVariable.forEach((element) => {
				if (element._id === id) {
					console.log(element._id, id)
					axios({
						url: `http://localhost:8080/${route}`,
						method: 'delete',
					})
						.then(() => {
							setAlert(message)
						})
						.catch((err) => {
							setAlert(err.message)
						})
				} else {
					newArr.push(element)
				}
			})
			setterFunction(newArr)
			setLoading(false)
		} catch (error) {
			setAlert(error.message)
			setLoading(false)
		}
	}

	const uploadMedia = (file, path, formObject, setFormObject, setLoading, model) => {
		setLoading(true)
		const storageRef = ref(storage,	`${path}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on('state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
				}
			},
			(error) => {
				// Handle unsuccessful uploads
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					console.log(downloadURL)
					if (model === 'asset') {
						let formData = formObject
						formData.carimage = downloadURL
						setFormObject(formData)
						setLoading(false)
					} else if (model === 'profile_picture') {
						let formData = formObject
						formData.profileimage = downloadURL
						setFormObject(formData)
						setLoading(false)
					} else if (model === 'document_image') {
						let formData = formObject
						formData.documentimage = downloadURL
						setFormObject(formData)
						setLoading(false)
					}
				});
			}
		);
	}


	return (
		<UtilsContext.Provider value={{ setAlert, alert, deleteObject, uploadMedia }}>
			{children}
		</UtilsContext.Provider>
	);
}

export function useUtilsContext() {
	return useContext(UtilsContext);
}
