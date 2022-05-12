import { useState } from 'react';

import IconTurn from '../../assets/images/turn.svg';
import { Button } from '../Button';

import './styles.css';

export function Question(props) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <>
      {isAnswerShowing ? (
        <div className="question answer showing">
          <p className="question-title">{props.answer}</p>

          <div className="buttons">
            <Button
              color="red"
              onClick={() => props.toggleQuestionShowing('red')}
            >
              Não lembrei
            </Button>
            <Button
              color="orange"
              onClick={() => props.toggleQuestionShowing('orange')}
            >
              Quase não lembrei
            </Button>
            <Button
              color="green"
              onClick={() => props.toggleQuestionShowing('green')}
            >
              Zap!
            </Button>
          </div>
        </div>
      ) : (
        <div className="question showing">
          <p className="question-title">{props.question}</p>
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
