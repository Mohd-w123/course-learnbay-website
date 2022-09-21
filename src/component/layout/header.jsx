import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const phoneNumber = "(+91) 77956 87988";
const address = "#1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore - 560102";


let socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: 'https://www.facebook.com/learnbay/',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: 'https://twitter.com/Learnbay',
    },
    {
        iconName: 'icofont-youtube',
        siteLink: 'https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: 'https://www.linkedin.com/company/learnbay/?original_referer=http%3A%2F%2Flocalhost%3A3001%2F',
    },
   
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Follow us on : </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink} target="_blank"><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"><img src="assets/images/logo/01.png" alt="logo" /></Link>
                            {/* <img src="assets/images/logo/01.png" alt="logo" /> */}
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li>
                                    <NavLink to="/">Home</NavLink>
                                        
                                    </li>
                                    <li>
                                    <NavLink to="/about">About Us</NavLink>
                                        
                                    </li>

                                    <li><NavLink to="/course">Course</NavLink></li>

                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Courses</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/course">Course</NavLink></li>
                                            <li><NavLink to="/course-single">Course Details</NavLink></li>
        
                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blog</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/blog">Blog Grid</NavLink></li>
                                            <li><NavLink to="/blog-2">Blog Style 2</NavLink></li>
                                            <li><NavLink to="/blog-3">Blog Style 3</NavLink></li>
                                            <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Pages</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li><NavLink to="/instructor">Instructor</NavLink></li>
                                            <li><NavLink to="/shop">Shop Page</NavLink></li>
                                            <li><NavLink to="/shop-single">Shop Details Page</NavLink></li>
                                            <li><NavLink to="/cart-page">Shop Cart Page</NavLink></li>
                                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                                            <li><NavLink to="/search-none">Search None</NavLink></li>
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul>
                                    </li> */}
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>
                            
                            {/* <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link> */}
                            <Link to="/applynow" className="signup"><i className="icofont-users"></i> <span>Apply Now</span> </Link>

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;