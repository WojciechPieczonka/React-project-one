import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <a href="#footer" className="company-name">
          moja firma
        </a>
        <ul className="link-list">
          <li className="link-about">
            <a href="#specialists">O nas</a>
          </li>
          <li className="link-offer">
            <a href="#services">Oferta</a>
          </li>
          <li className="link-contact">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a href="#" className="disabled">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
