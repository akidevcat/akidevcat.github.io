import React from "react";

interface TimelineElement {
    subtitle: string,
    title: string,
    description: string
};

interface TimelineProps {
    elements: TimelineElement[]
};

export const Timeline : React.FunctionComponent<TimelineProps> = props =>
    <div className="timeline">
    {props.elements.map((e, i) => 
    (
        <div className="row">
          <div className={"col-1 d-flex flex-column align-items-center ps-0 ms-0 pe-0 me-2 mt-" + (i == 0 ? "2" : "0")}>
              {(i != 0) ? 
              <div className="d-flex cv-timeline-top m-0 p-0 h-100">
                <div className="vr cv-vr cv-fg-primary opacity-100 mt-0 pt-0"></div>
              </div> : <></>}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
            <div className="d-flex m-0 p-0 h-100">
              <div className="vr cv-vr cv-fg-primary opacity-100 mt-0 pt-0"></div>
            </div>
          </div>
          <div className="col ps-0 mb-2">
            <span className="badge cv-bg-secondary shadow">{e.subtitle}</span>
            <h6 className="mb-0">{e.title}</h6>
            <span>{e.description}</span>
          </div>
        </div>
    ))}
    </div>

export default Timeline;