import React from 'react';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import './Quiz.css';
import FinishedQuiz from './FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {

    state = {
        activeQuestion: 0,
        rightAnswers: 0,
        userRespons: [],
        quizes: [
            {
                answerList: {
                    question: 'Вопрос 1',
                    currentId: 2,
                    answers: [
                        {text: 'Ответ1', id: 1},
                        {text: 'Ответ2', id: 2},
                        {text: 'Ответ3', id: 3},
                        {text: 'Ответ4', id: 4}
                    ]
                }
            },
            {
                answerList: {
                    question: 'Вопрос 2',
                    currentId: 3,
                    answers: [
                        {text: 'Ответ1', id: 1},
                        {text: 'Ответ2', id: 2},
                        {text: 'Ответ3', id: 3},
                        {text: 'Ответ4', id: 4}
                    ]
                }
            },
            {
                answerList: {
                    question: 'Вопрос 3',
                    currentId: 4,
                    answers: [
                        {text: 'Ответ1', id: 1},
                        {text: 'Ответ2', id: 2},
                        {text: 'Ответ3', id: 3},
                        {text: 'Ответ4', id: 4}
                    ]
                }
            },
            {
                answerList: {
                    question: 'Вопрос 4',
                    currentId: 1,
                    answers: [
                        {text: 'Ответ1', id: 1},
                        {text: 'Ответ2', id: 2},
                        {text: 'Ответ3', id: 3},
                        {text: 'Ответ4', id: 4}
                    ]
                }
            }
        ]
    }

    nextAnswer = (valueId,valueText) => {
        const activeQuestion = this.state.quizes[this.state.activeQuestion];
        let userRespons = this.state.userRespons;
        userRespons.push(valueText);
        this.setState((prevState) => {
            return {
                activeQuestion: prevState.activeQuestion + 1,
                userRespons: userRespons
            }
        })
        if(valueId === activeQuestion.answerList.currentId) {
            this.setState((prevState) => {
                return {
                    rightAnswers: prevState.rightAnswers + 1
                }
            })
        }
    }

    onAnswerClick = (answerId, answerText) => {
        this.nextAnswer(answerId, answerText);
    }

    refreshQuiz = () => {
        this.setState({
            activeQuestion: 0,
            rightAnswers: 0,
            userRespons: [],
        })
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizContainer">
                    <h1>Квиз</h1>
                    {
                        this.state.activeQuestion + 1 > this.state.quizes.length
                        ? <FinishedQuiz
                            rightAnswers={this.state.rightAnswers}
                            length={this.state.quizes.length}
                            userRespons={this.state.userRespons}
                            refreshQuiz={this.refreshQuiz}
                          />
                        : <ActiveQuiz 
                            question={this.state.quizes[this.state.activeQuestion].answerList.question} 
                            answers={this.state.quizes[this.state.activeQuestion].answerList.answers}
                            length={this.state.quizes.length}
                            onAnswerClick={this.onAnswerClick}
                            activeQuestion={this.state.activeQuestion + 1}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;