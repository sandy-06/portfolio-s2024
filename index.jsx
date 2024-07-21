import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { navMenus } from "./config";
import { HiX } from "react-icons/hi";
import "./style.scss";

const NavBar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <nav className="navbar ">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          <ul
            className={
              click
                ? "navbar__container__menu active"
                : "navbar__container__menu"
            }
          >
            {navMenus.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link to={item.to} className="navbar__container__menu__links">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar__container__menu__icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
