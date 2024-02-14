function Footer({ className }) {
  return (
    <footer className={`border border-lines-10 flex ${className}`}>
      <ul className="flex items-center">
        <li className="nav-link border-x border-lines-10">
          <p>find me in:</p>
        </li>
        <li className="nav-link border-r border-lines-10">
          <a
            href="https://twitter.com/creativesshits"
            className="text-labels text-secondary-10"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </li>
        <li className="nav-link border-r border-lines-10">
          <a
            href="https://web.facebook.com/rasyid.annas.79"
            className="text-labels text-secondary-10"
          >
            <i className="ri-facebook-fill"></i>
          </a>
        </li>
      </ul>

      <a
        href="https://github.com/Rasyidannas"
        className="nav-link ml-auto border-x border-lines-10"
      >
        @Rasyidannas{" "}
        <span className="text-labels text-secondary-10">
          <i className="ri-github-fill"></i>
        </span>
      </a>
    </footer>
  );
}

export default Footer;
