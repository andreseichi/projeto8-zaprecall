import Logo from '../../assets/images/logo.png';

import './styles.css';

export function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="" className="logo" />

      <h2 className="logo-name">ZapRecall</h2>
    </header>
  );
}
