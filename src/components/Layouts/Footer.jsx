function Footer({ className }) {
  return (
    <footer className={`border border-lines-10 flex ${className}`}>
      <ul className="flex items-center">
        <li className="nav-link border-x border-lines-10">
          <p>find me in:</p>
        </li>
        <li className="border-x border-lines-10 nav-link">
          <span className="text-labels text-secondary-10">
            <i className="ri-twitter-fill"></i>
          </span>
        </li>
        <li className="border-x border-lines-10 nav-link">
          <span className="text-labels text-secondary-10">
            <i className="ri-facebook-fill"></i>
          </span>
        </li>
      </ul>

      <a className="nav-link ml-auto border-x border-lines-10">
        @Rasyidannas{" "}
        <span className="text-labels text-secondary-10">
          <i className="ri-github-fill"></i>
        </span>
      </a>
    </footer>
  );
}

export default Footer;
