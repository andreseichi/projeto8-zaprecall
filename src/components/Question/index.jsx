import { useState } from 'react';

import IconTurn from '../../assets/images/turn.svg';
import { Button } from '../Button';

import './styles.css';

export function Question({ answer, toggleQuestionShowing, question }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <>
      {isAnswerShowing ? (
        <div className="question answer showing">
          <p className="question-title">{answer}</p>

          <div className="buttons">
            <Button color="red" onClick={() => toggleQuestionShowing('red')}>
              Não lembrei
            </Button>
            <Button
              color="orange"
              onClick={() => toggleQuestionShowing('orange')}
            >
              Quase não lembrei
            </Button>
            <Button
              color="green"
              onClick={() => toggleQuestionShowing('green')}
            >
              Zap!
            </Button>
          </div>
        </div>
      ) : (
        <div className="question showing">
          <p className="question-title">{question}</p>
          <img
            src={IconTurn}
            alt=""
            className="icon-turn"
            onClick={() => setIsAnswerShowing(true)}
          />
        </div>
      )}
    </>
  );
}
