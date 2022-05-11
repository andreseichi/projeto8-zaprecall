import icon from '../../assets/images/x.svg';

import './styles.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="message">
        <span className="first-message">Parabéns!</span>
        <span className="second-message">
          Você não esqueceu de nenhum flashcard!
        </span>
      </div>

      <div className="completed">
        <span>1/4 concluídos</span>
        <div className="icons">
          <img src={icon} alt="" />
        </div>
      </div>
    </footer>
  );
}
