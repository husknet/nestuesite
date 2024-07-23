import React from 'react';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-text">Loading...</div>
            <div className="loading-bar">
                <div className="loading-progress"></div>
            </div>
        </div>
    );
};

export default Loading;
