import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                {/* start header top  */}
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-inner">
                            <div className="header-top-left">
                                <span>usd $ </span>
                            </div>
                            <div className="header-top-right">
                                <span> <a href="tel:+1234567890"><i className="fa-solid fa-phone" /> +1234567890</a>
                                </span>
                                <span>my account <i className="fa-solid fa-angle-down" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end header top  */}
                {/* start header bottom  */}
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-bot-inner">
                            <div className="header-bot-left">
                                <a href="index.html">
                                    <img src="assets/images/etrend-gymspa-logo-1623748814.jpg" alt="logo-img" />
                                </a>
                            </div>
                            <div className="header-bot-middle">
                                <ul className="navbar">
                                    <li><Link to={'/'}>home</Link>
                                    </li>
                                    <li><a href="#">
                                        <span>shop</span>
                                    </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">fashion</a>
                                                <ul className="sub-menu-2 ">
                                                    <li><a href="#">men</a></li>
                                                    <li><a href="#">women</a></li>
                                                    <li><a href="#">kids</a></li>
                                                    <li><a href="#">accessories</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">jewellery</a>
                                                <ul className="sub-menu-2 ">
                                                    <li><a href="#">rings</a></li>
                                                    <li><a href="#">bracelets</a></li>
                                                    <li><a href="#">neckless</a></li>
                                                    <li><a href="#">wedding bands</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">furniture</a>
                                                <ul className="sub-menu-2 ">
                                                    <li><a href="#">living room</a></li>
                                                    <li><a href="#">kitchen</a></li>
                                                    <li><a href="#">office</a></li>
                                                    <li><a href="#">home decore</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">autoparts</a>
                                                <ul className="sub-menu-2 ">
                                                    <li><a href="#">engine parts</a></li>
                                                    <li><a href="#">exhaust parts</a></li>
                                                    <li><a href="#">brake parts</a></li>
                                                    <li><a href="#">body parts</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">
                                        <span>furniture</span>
                                        <span> </span>
                                    </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">living room</a>
                                            </li>
                                            <li>
                                                <a href="#">kitchen </a>
                                            </li>
                                            <li>
                                                <a href="#">office</a>
                                            </li>
                                            <li>
                                                <a href="#">home decore</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/Sale'}>sale</Link></li>
                                    <li><Link to={'/Contactus'}>contact us</Link></li>
                                </ul>

                            </div>
                            <div className="header-bot-right">
                                <span><i className="fa-solid fa-magnifying-glass" /></span>
                                <span><i className="fa-solid fa-bag-shopping" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end header bottom  */}
            </div>


        </>

    )
}
export default Header