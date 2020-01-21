import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.css';

const Loading = props => {
    return (
        <div className="Loading">
            <FontAwesomeIcon icon={faSpinner} size="3x"/>
        </div>
    )
}

export default Loading;