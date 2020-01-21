import React from 'react';
import './ActiveQuiz.css';
import AnswersList from '../AnswersList/AnswersList';

const ActiveQuiz = (props) => {
    return (
        <div className="ActiveQuiz">
            <h3 className="question">{props.question} <small>{props.activeQuestion} из {props.length}</small></h3>
            <ul className="answers">
                {props.answers.map((item, index) => {
                    return(
                        <AnswersList 
                            name={item.text}
                            key={index}
                            id={item.id}
                            onAnswerClick={props.onAnswerClick}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ActiveQuiz;