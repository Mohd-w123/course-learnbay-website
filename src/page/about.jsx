import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AchievementTwo from "../component/section/achievement-2";
// import Blog from "../component/section/blog";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";




const subTitle = "About Our Learnbay";
const title = "They say knowledge is power, and we want to empower all our aspirants to success.";
const desc = "";

const year = "30+";
const expareance = "Years Of Experiences";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Mission',
        desc: 'Safeguarding your career, even under the most unstable job market scenario, via the acquisition of emerging technology-based unique skills.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Vision',
        desc: 'To lead the industrial training sector by generating demanding professionals with future proof technical skills and knowledge.',
    },
    // {
    //     imgUrl: 'assets/images/about/icon/03.jpg',
    //     imgAlt: 'about icon rajibraj91 rajibraj',
    //     title: 'Online Classes',
    //     desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    // },
]


const AboutPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'About Our Learnbay'} curPage={'About'} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                {/* <div className="abs-thumb">
                                    <img src="assets/images/about/02.jpg" alt="about" />
                                </div> */}
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Student /> */}

            <AchievementTwo />
            <Skill />
            {/* <Blog /> */}
            <Instructor />
            <Footer />

        </Fragment>
    );
}

export default AboutPage;
