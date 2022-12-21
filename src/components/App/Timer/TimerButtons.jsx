import React from "react";
// import "./ControlButtons.css";

export default function TimerButtons(props) {
const StartButton = (
	<div className="startButton"
		onClick={props.handleStart}>
	Start
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
	<div className="btn btn-two"
		onClick={props.handleReset}>
		Reset
	</div>
	<div className="btn btn-one"
		onClick={props.handlePauseResume}>
		{props.isPaused ? "Resume" : "Pause"}
	</div>
	</div>
);

return (
	<div className="controlButtons">
	<div>{props.active ? ActiveButtons : StartButton}</div>
	</div>
);
}
