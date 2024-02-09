function TopNav({ className }) {
  return (
    <nav
      className={`flex text-secondary-10 border border-lines-10 ${className}`}
    >
      <a href="/" className="nav-link pr-24">
        rasyid-annas
      </a>

      <ul className="flex">
        <li className="nav-link border-x border-lines-10">
          <a>_hello</a>
        </li>
        <li className="nav-link border-x border-lines-10">
          <a>_about-me</a>
        </li>
        <li className="nav-link border-x border-lines-10">
          <a>_projects</a>
        </li>
      </ul>

      <a className="nav-link border-x border-lines-10 ml-auto">_contact-me</a>
    </nav>
  );
}

export default TopNav;
