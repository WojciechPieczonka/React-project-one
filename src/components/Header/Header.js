import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="shadow">
        <div className="container">
          <h1 className="header-h1">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="header-p">Nie wierz nam na słowo - sprawdź</p>
          <a href="#services" className="button">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
