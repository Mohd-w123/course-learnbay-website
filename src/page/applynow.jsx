import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";



const title = "Apply now for book demo session";
const socialTitle = "Follow us on";
const btnText = "Get Started Now";


let socialList = [
    {
        link: 'https://www.facebook.com/learnbay/',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: 'https://twitter.com/Learnbay',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: 'https://www.linkedin.com/company/learnbay/?original_referer=http%3A%2F%2Flocalhost%3A3001%2F',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: 'https://www.instagram.com/learnbayofficial/',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: 'https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA/featured',
        iconName: 'icofont-youtube',
        className: 'youtube',
    },
]


const ApplynowPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Apply Now'} curPage={'Apply Now'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form action="https://getform.io/f/94c74039-f505-4ebf-922e-b4728bd793e3" method="POST" className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="Phone Number"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="textarea"
                                    name="message"
                                    placeholder="Write your message here..."
                                />
                            </div>
                            <div className="form-group">
                                <button className="lab-btn" type="submit"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            {/* <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span> */}
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default ApplynowPage;