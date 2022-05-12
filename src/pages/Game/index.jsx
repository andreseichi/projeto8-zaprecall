import { useState } from 'react';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import { questions } from '../../data/questions';

import './styles.css';

export function Game() {
  const [answersAmount, setAnswersAmount] = useState(0);
  const [icons, setIcons] = useState([]);

  function handleAnswersAmount() {
    setAnswersAmount(answersAmount + 1);
  }

  function addIcons(icon) {
    const iconsNewArray = [...icons, icon];
    setIcons(iconsNewArray);
  }

  return (
    <div className="game">
      <Header />

      <div className="questions">
        {questions?.map((question, index) => (
          <Card
            key={index}
            index={index + 1}
            question={question.question}
            answer={question.answer}
            addIcons={addIcons}
          />
        ))}
      </div>

      <Footer
        questionsAmount={questions.length}
        answersAmount={answersAmount}
        icons={icons}
      />
    </div>
  );
}
