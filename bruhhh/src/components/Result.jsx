// Result.jsx

import React from 'react';
import './QuestionBox.css';

export default function Result(props) {
  const result = props.stateScore;
  const totalQuestion = 5;

  const buttonStyle = {
    backgroundColor: props.lightMode ? '#000000' : '#ffffff',
    color: props.lightMode ? '#ffffff' : '#000000',
  };

  return (
    <div id='main'>
      <div className='question-modal'>
        <div className='nav-bar'>
          <span>Quizzinator</span>
          <button
            className='dark-mode-btn'
            onClick={props.change}
            style={buttonStyle}
          >
            {props.lightMode ? 'LIGHT' : 'DARK'}
          </button>
        </div>
      </div>
      {/* result card */}
      <div id='resultCard'>
        <h4>Final result</h4>
        <div className='report'>
          {result} out of {totalQuestion} correct - {(result / totalQuestion) * 100}%
        </div>
        <button id='Restart-btn' onClick={props.reset} style={buttonStyle}>
          Restart
        </button>
      </div>
    </div>
  );
}
