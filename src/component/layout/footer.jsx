
import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const siteTitle = "Courses";
const useTitle = "Learnbay";
const socialTitle = "Social Contact";
const supportTitle = "Our Branches";


const siteList = [
    {
        text: 'Data Science Foundation Program',
        link: '/advance-data-science-certification-courses',
    },
    {
        text: 'Advanced DS And AI Program',
        link: '/advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Full Stack Software Development Program',
        link: 'advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Advance AI & ML Program For Tech Professionals',
        link: 'advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Data Science & AI For Managers',
        link: 'advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Data Science & AI With Job Guarantee Program',
        link: 'advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Business Analytics Program',
        link: 'advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Data Analytics Program',
        link: 'advance-data-science-certification-courses.jsx',
    },
    {
        text: 'Data Structures Algorithms And System Design',
        link: 'advance-data-science-certification-courses.jsx',
    },
]

const useList = [
    {
        text: 'About Us',
        link: '/about',
    },
    {
        text: 'Contact Us',
        link: '#',
    },
    {
        text: 'Apply Now',
        link: '/applynow',
    },
]

const socialList = [
    {
        text: 'Facebook',
        link: 'https://www.facebook.com/learnbay/',
    },
    {
        text: 'Twitter',
        link: 'https://twitter.com/Learnbay',
    },
    {
        text: 'Instagram',
        link: 'https://www.instagram.com/learnbayofficial/',
    },
    {
        text: 'YouTube',
        link: 'https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured',
    },
    {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/company/learnbay/?original_referer=http%3A%2F%2Flocalhost%3A3001%2F',
    },
]

const supportList = [
    {
        text: 'Pune',
        link: 'https://www.learnbay.co/data-science-course-training-in-pune',
    },
    {
        text: 'Mumbai',
        link: 'https://www.learnbay.co/data-science-course-training-in-mumbai',
    },
    {
        text: 'Chennai',
        link: 'https://www.learnbay.co/data-science-course-training-in-chennai',
    },
    {
        text: 'Canada',
        link: 'https://www.learnbay.co/machine-learning-course-training-in-canada',
    },
    {
        text: 'Bangalore',
        link: 'https://www.learnbay.co/data-analytics-course-training-in-bangalore',
    },
    {
        text: 'Hyderabad',
        link: 'https://www.learnbay.co/data-analytics-course-training-in-hyderabad',
    },
    {
        text: 'Dubai',
        link: 'https://www.learnbay.co/machine-learning-course-training-in-dubai',
    },

    {
        text: 'Delhi',
        link: 'https://www.learnbay.co/machine-learning-course-training-in-delhi',
    },
]



const Footer = () => {
    return (
        <div className="news-footer-wrap">
            {/* <div className="fs-shape">
                <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
                <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
            </div>
             */}
            <div className="news-letter">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="news-title">
                            <h3>{newsTitle}</h3>
                        </div>
                        <div className="news-form">
                            <form action="https://getform.io/f/94c74039-f505-4ebf-922e-b4728bd793e3" method="POST">
                                <div className="nf-list">
                                    <input type="email" name="email" placeholder="Enter Your Email" />
                                    <input type="submit" name="submit" value="Subscribe Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer>
                <div className="footer-top padding-tb pt-0">
                    <div className="container">
                        <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{siteTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {siteList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{useTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {useList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{socialTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {socialList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{supportTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {supportList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <div className="container">
                        <div className="section-wrapper">
                            <p>Copyright © 2022 <Link to="https://www.learnbay-courses.in">Courses Learnbay</Link> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
}
 
export default Footer;