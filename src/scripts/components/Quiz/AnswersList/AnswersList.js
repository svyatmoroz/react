import React from 'react';
import './AnswersList.css';

const AnswersList = props => {
    const cls = ['AnswerList'];
    return(
        <li 
            onClick={() => props.onAnswerClick(props.id, props.name)} 
            className={cls.join(' ')}
        >
            {props.name}
        </li>
    )
}

export default AnswersList;