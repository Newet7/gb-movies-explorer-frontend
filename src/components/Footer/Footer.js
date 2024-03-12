import "./Footer.css";

function Footer() {
  return (
    <footer className="footer section content__footer">
      <p className="footer__text">
        Учебный проект frontend-программист &times; BeatFilm.
      </p>
      <nav className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <a
              href="https://github.com/Newet7/gb-movies-explorer-frontend"
              className="footer__link"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">&copy;&nbsp;2024</p>
    </footer>
  );
}

export default Footer;
