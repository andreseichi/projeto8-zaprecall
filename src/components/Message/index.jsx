import happyEmoji from '../../assets/images/party.png';
import sadEmoji from '../../assets/images/sad.png';

import './styles.css';

export function Message({ hasRedAnswer }) {
  return (
    <>
      {hasRedAnswer ? (
        <div className="message">
          <span className="first-message">
            <img src={sadEmoji} alt="sad emoji" className="emoji" />
            <span>Putz...</span>
          </span>
          <span className="second-message">
            <span>Ainda faltam alguns... Mas não desanime!</span>
          </span>
        </div>
      ) : (
        <div className="message">
          <span className="first-message">
            <img src={happyEmoji} alt="happy emoji" className="emoji" />
            Parabéns!
          </span>
          <span className="second-message">
            Você não esqueceu de nenhum flashcard!
          </span>
        </div>
      )}
    </>
  );
}
