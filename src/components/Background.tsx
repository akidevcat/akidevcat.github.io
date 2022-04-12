import React, { useRef } from 'react';

export const Background = () => {
    return (
        <div id="background">
            <div className="text-start">
                {() => {
                const lines = document.body.innerHTML.replaceAll('</', '\n</').split('\n');
                return lines;
                }}
                fdsfdfsd
            </div>
        </div>
    )
}

export default Background;