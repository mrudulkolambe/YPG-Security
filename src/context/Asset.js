import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AssetContext = createContext();

export function AssetContextProvider({ children }) {
	const [assets, setAssets] = useState([])


	const addAssets = (data) => {
		axios({
			url: "http://localhost:8080/assets/add-asset",
			method: "post",
			data: data
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	useEffect(() => {
		axios({
			url: "http://localhost:8080/assets/",
			method: "get",
		})
			.then((res) => {
				setAssets(res.data)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	return (
		<AssetContext.Provider value={{ addAssets, assets }}>
			{children}
		</AssetContext.Provider>
	);
}

export function useAssetContext() {
	return useContext(AssetContext);
}
