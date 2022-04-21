import React from "react";

interface CVContainerProps {
    children: React.ReactNode,
    title: string
};

export const CVContainer : React.FunctionComponent<CVContainerProps> = props => 
    <div className="cv-container">
        <div className="d-flex w-100 m-0 p-0">
            <div className="m-0 ps-2 pe-2 pt-0 pb-0 cv-card-title shadow">
                <span className=""><span className="cv-card-title-arrow">▼</span> {props.title}</span>
            </div>
        </div>
        <div className="card cv-card shadow">
            <div className="card-body text-start">
                {props.children}
            </div>
        </div>
    </div>

export default CVContainer;