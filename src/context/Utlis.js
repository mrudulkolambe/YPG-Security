import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const UtilsContext = createContext();

export function UtilsContextProvider({ children }) {
	const [alert, setAlert] = useState("")


	useEffect(() => {
		if (alert.length !== 0) {
			setTimeout(() => {
				setAlert('')
			}, 3000);
		}
	}, [alert]);

	const uploadMedia = (file, path, ) => {

	}


	return (
		<UtilsContext.Provider value={{ setAlert, alert }}>
			{children}
		</UtilsContext.Provider>
	);
}

export function useUtilsContext() {
	return useContext(UtilsContext);
}
