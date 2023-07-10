import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="shadow">
        <div className="container">
          <h1 className="company-name-heading">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="company-name-description">
            Nie wierz nam na słowo - sprawdź
          </p>
          <a href="#services" className="button">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
