import { NavLink } from "react-router-dom";

function TopNav({ className }) {
  return (
    <nav
      className={`flex text-secondary-10 border border-lines-10 ${className}`}
    >
      <a href="/" className="nav-link w-[25%]">
        rasyid-annas
      </a>

      <ul className="flex">
        <li className="border-x border-lines-10 flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link__active" : "nav-link"
            }
          >
            _hello
          </NavLink>
        </li>
        <li className="border-x border-lines-10 flex">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link__active" : "nav-link"
            }
          >
            _about-me
          </NavLink>
        </li>
        <li className="border-x border-lines-10 flex">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link__active" : "nav-link"
            }
          >
            _projects
          </NavLink>
        </li>
      </ul>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "nav-link__active ml-auto border-l border-l-lines-10"
            : "nav-link ml-auto border-l border-l-lines-10"
        }
      >
        _contact-me
      </NavLink>
    </nav>
  );
}

export default TopNav;
