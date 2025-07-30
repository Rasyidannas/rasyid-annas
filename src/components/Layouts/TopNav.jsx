import { useState } from "react";
import { NavLink } from "react-router-dom";

function TopNav({ className }) {
  const [navExpanded, setNavExpanded] = useState(false);

  const expandHandler = () => {
    setNavExpanded((prevState) => !prevState);
  };

  return (
    <nav
      className={`flex text-secondary-10 border border-lines-10 relative ${className}`}
    >
      <a href="/" className="nav-link sm:w-1/3 lg:w-[25%]">
        rasyid-annas
      </a>

      {/* Desktop Nav */}
      <ul className="sm:flex hidden">
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
            ? "nav-link__active ml-auto border-l border-l-lines-10 sm:block hidden content-center"
            : "nav-link ml-auto border-l border-l-lines-10 sm:block hidden content-center"
        }
      >
        _contact-me
      </NavLink>

      {/* Mobile Nav */}
      <div
        className="nav-link ml-auto sm:hidden flex items-center"
        onClick={expandHandler}
      >
        <i className={`${navExpanded ? "ri-close-fill" : "ri-menu-fill"}`}></i>
      </div>
      {/* Expanded Mobile Nav */}
      <ul
        className={`absolute z-50 bg-primary-20 top-full w-full h-[80vh] border-t border-lines-10 sm:hidden ${
          navExpanded ? "block" : "hidden"
        }`}
      >
        <li className="border-b border-x border-lines-10 flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link__active w-full" : "nav-link w-full"
            }
          >
            _hello
          </NavLink>
        </li>
        <li className="border-b border-x border-lines-10 flex">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link__active w-full" : "nav-link w-full"
            }
          >
            _about-me
          </NavLink>
        </li>
        <li className="border-b border-x border-lines-10 flex">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link__active w-full" : "nav-link w-full"
            }
          >
            _projects
          </NavLink>
        </li>
        <li className="border-b border-x border-lines-10 flex">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link__active w-full" : "nav-link w-full"
            }
          >
            _contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
