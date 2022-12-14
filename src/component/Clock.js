import React, { useEffect, useState } from 'react'

const Clock = () => {
	const [clockState, setClockState] = useState();

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setClockState(date.toLocaleTimeString());
		}, 1000);
	}, []);
	return (
		<p>{clockState}</p>
	)
}

export default Clock