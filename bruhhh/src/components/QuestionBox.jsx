// QuestionBox.jsx

import React, { useState, useEffect } from 'react';
import questions from '../questions';
import '../components/QuestionBox.css';
import Result from './Result';

export default function QuestionBox() {
  const [statequestion, setStatequestion] = useState(0);
  const [stateScore, setScore] = useState(0);
  const [screenColor, setscreenColor] = useState(false);

  const change = () => {
    setscreenColor((screenColor) => !screenColor);
  };

  const reset = () => {
    setScore(0);
    setStatequestion(0);
  };

  const moveNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(stateScore + 1);
    }
    setStatequestion(statequestion + 1);
  };

  useEffect(() => {
    console.log(stateScore);
  }, [stateScore]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (screenColor) {
      body.style.backgroundColor = '#f9fbf2';
      body.style.color = 'black'; // Change text color to black for light mode
    } else {
      body.style.backgroundColor = '#00171f';
    }
  }, [screenColor]);

  return (
    <div id='main-div'>
      {statequestion < 5 ? (
        <div className='question-modal'>
          <div className='nav-bar'>
            <span>Quizzinator</span>
            <button className='dark-mode-btn' onClick={change}>
              {screenColor ? 'DARK' : 'LIGHT'}
            </button>
          </div>
          <div className='question-box'>
            <h4>Question:{statequestion + 1} out of 5</h4>
            <h3 id='question'>{questions[statequestion].text}</h3>
            <div id='option-div'>
              {questions[statequestion].options.map((el, index) => (
                <button
                  key={index}
                  onClick={() => moveNextQuestion(el.isCorrect)}
                  className='option-btn' // Add this class for styling
                >
                  {el.text}
                </button>
              ))}
            </div>
            <div className='highlight-btn'>
              <button
                id='hightlight-btn'
                onClick={() => {
                  const element = document.getElementById('question');
                  element.style.color = '#af1b3f';
                }}
                className='highlight-btn' // Add this class for styling
              >
                Highlight
              </button>
              <button
                id='remove-highlight'
                onClick={() => {
                  const element = document.getElementById('question');
                  element.style.color = '#000000';
                }}
                className='highlight-btn' // Add this class for styling
              >
                Remove highlight
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result stateScore={stateScore} reset={reset} change={change} lightMode={!screenColor} />
      )}
    </div>
  );
}
