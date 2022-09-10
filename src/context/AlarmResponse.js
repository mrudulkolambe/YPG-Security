import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AlarmResponse = createContext();

export function AlarmResponseProvider({ children }) {
	const [alarmResponse, setAlarmResponse] = useState([])


	const addAlarmResponse = (data) => {
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
			url: "http://localhost:8080/alarm/",
			method: "get",
		})
			.then((res) => {
				setAlarmResponse(res.data)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	return (
		<AlarmResponse.Provider value={{ alarmResponse, addAlarmResponse }}>
			{children}
		</AlarmResponse.Provider>
	);
}

export function useAlarmResponse() {
	return useContext(AlarmResponse);
}
