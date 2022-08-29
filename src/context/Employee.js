import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
	const [employees, setEmployees] = useState([])
	const [userData, setUserData] = useState()
	const navigate = useNavigate()

	console.log(employees);

	const addEmployee = (data) => {
		axios({
			url: "http://localhost:8080/employee/add-employee",
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
			url: "http://localhost:8080/employee/",
			method: "get",
		})
			.then((res) => {
				setEmployees(res.data)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	return (
		<EmployeeContext.Provider value={{ addEmployee, employees }}>
			{children}
		</EmployeeContext.Provider>
	);
}

export function useEmployeeContext() {
	return useContext(EmployeeContext);
}
