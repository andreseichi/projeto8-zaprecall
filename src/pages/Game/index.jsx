import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { questions } from '../../data/questions';

import './styles.css';
import { Card } from '../../components/Card';

export function Game() {
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
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
