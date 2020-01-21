import React from 'react';
import Button from '../../UI/Button/Button';
import './FinishedQuiz.css';

const FinishedQuiz = props => {
    return (
        <div className='FinishedQuiz'>
            <p>Правильных ответов: {props.rightAnswers} из {props.length}</p>
            <h4>Ваши ответы:</h4>
            <ul>
                {props.userRespons.map((item, index) => {
                    return(
                        <li key={index}><strong>Вопрос {index + 1}</strong>: {item}</li>
                    )
                })}
            </ul>
            <Button onclick={props.refreshQuiz} />
        </div>
    )
}

export default FinishedQuiz;