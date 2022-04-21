import React from "react";

interface CVProgressProps {
    progressValue: number
};

export const CVProgress : React.FunctionComponent<CVProgressProps> = props => 
    <div className="d-flex align-items-center cv-progress">
        <hr className="cv-fg-accent opacity-100 rounded-pill m-0 shadow" style={{height: 3, width: props.progressValue + "%"}}/>
        <div className="cv-bg-accent rounded-circle shadow" style={{height: 16, width: 16}}></div>
        <hr className="cv-bg-secondary opacity-100 rounded-pill m-0 shadow" style={{height: 3, width: (100 - props.progressValue) + "%"}}/>
    </div>

export default CVProgress;