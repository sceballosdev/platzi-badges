import React from 'react';
import * as ReactDOM from "react-dom";

import './styles/Modal.css';

/**
 * @return {null}
 */
function Modal(props) {
    if (!props.isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onClose} className="Modal__close-button">
                    X
                </button>

                {props.children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;
