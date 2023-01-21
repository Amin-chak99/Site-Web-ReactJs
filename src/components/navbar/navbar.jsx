import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faCartShopping , faCaretDown , faBars} from '@fortawesome/free-solid-svg-icons';


import "./navbar.css";
import logo from "../../assets/products/logo.png";


export const Navbar = () => {
  return (
   <div className="containerd">
     <div className="col-lg-9 col-md-12 col-sm-12">
      <div className="navbar">
      <div className="logo">
       <img src={logo} title="logo"/>
      </div>
      <div className="menu">
                        <ul className="f-menu">
                            <li><Link to="/"> Home </Link></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCaretDown}/> Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </li>
                            
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li>  <Link to="/cart">Shop
          <ShoppingCart size={32} />
        </Link></li>
                        </ul>
                    </div>
      
    </div>
    </div>
   </div>
  );
};
