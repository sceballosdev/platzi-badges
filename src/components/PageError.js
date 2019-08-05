import React from 'react';

import './styles/PageError.css';

function PageError(props) {
    return (
        <div className="PageError">
            <h3>❌❗{props.error.message}‼😱</h3>
        </div>
    );
}

export default PageError;
