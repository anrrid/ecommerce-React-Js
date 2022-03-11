import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {

  const hamburger = () => {
    const nav = document.getElementsByClassName('nav-link');
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.toggle('disappear');
    }
  }


  return (
    <nav>
      <button className="nav-button" onClick={hamburger}>Menú</button>
      <NavLink to="/" className="nav-link disappear">My Store</NavLink>
      <NavLink to="/products" className="nav-link disappear">Products</NavLink>
      <NavLink to="/category/1" className="nav-link disappear">Men</NavLink>
      <NavLink to="category/2" className="nav-link disappear">Women</NavLink>
      <NavLink to="/cart" cltassName="nav-link disappear"><CartWidget /></NavLink>
    </nav>

  );
};

export default NavBar;