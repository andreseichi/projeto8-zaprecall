import Logo from '../../assets/images/logo.png';

import './styles.css';

export function Home({ startGame }) {
  return (
    <div className="home">
      <img src={Logo} alt="" className="logo" />

      <h1 className="logo-name">ZapRecall</h1>

      <button className="button" onClick={startGame}>
        Iniciar Recall!
      </button>
    </div>
  );
}
