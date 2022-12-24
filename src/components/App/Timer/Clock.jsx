import React, { useState } from "react";
// import "./StopWatch.css";
import Timer from "./Timer";
import TimerButtons from "./TimerButtons";

function Clock( { time, setTime } ) {
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);


React.useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);

const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

const handlePauseResume = () => {
	setIsPaused(!isPaused);
};

const handleReset = () => {
	setIsActive(false);
	// Need to trigger answer check here
	// Then fire POST request to store time, number, etc
	

	setTime(0);
};

return (
	<div className="stop-watch">
	<Timer time={time} />
	<TimerButtons
		active={isActive}
		isPaused={isPaused}
		handleStart={handleStart}
		handlePauseResume={handlePauseResume}
		handleReset={handleReset}
	/>
	</div>
);
}

export default Clock;
