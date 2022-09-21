import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheader-2";
import Author from "../component/sidebar/author";
import Comment from "../component/sidebar/comment";
import CourseSideCetagory from "../component/sidebar/course-cetagory";
import CourseSideDetail from "../component/sidebar/course-detail";
import Respond from "../component/sidebar/respond";


const AdvanceDataScienceCertificationCourses = () => {
    return (
        <Fragment>
            <Header />
            <PageHeaderTwo />
            <div className="course-single-section padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="main-part">
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-content">
                                            {/* <h3>Course Overview</h3>
                                            <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p> */}
                                            <h2>Why Enroll In This Program?</h2>
                                            <ul className="lab-ul">
                                                <li><i className="icofont-tick-mark"></i><b>1-on-1 Dedication :</b> Live interactive session with expert for every individual</li>
                                                <li><i className="icofont-tick-mark"></i><b>Assured Interview Call:</b> Get job referrals powered by 250+ hiring partners</li>
                                                <li><i className="icofont-tick-mark"></i><b>Premium Mentoring :</b> Get professionally trained from MAANG and MNC experts</li>
                                                <li><i className="icofont-tick-mark"></i><b>Crafted for professional :</b>Prioritize growth and salary hike with in-demand skillset</li>
                                            </ul>
                                            <h2>What Makes Us Different?</h2>
                                            <p>You have several options when choosing any course from Learnbay as we have never failed our promises.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-video">
                                    <div className="course-video-title">
                                        <h4>Course Overview</h4>
                                    </div>
                                    <div className="course-video-content">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion01">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>Project Innovation Lab</span> </button>
                                                </div>
                                                <div id="videolist1" className="accordion-collapse collapse show" aria-labelledby="accordion01" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">
                                                                <h5>Take advantage of interactive, live learning in comfort of your home. Experts from MNCs and MAANG assist in online and offline project sessions at different project innovation centers around 7+ cities in India</h5>
                                                                
                                                                </div>
                                                                </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion02">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span>Domain Elective Mode</span> </button>
                                                </div>
                                                <div id="videolist2" className="accordion-collapse collapse" aria-labelledby="accordion02" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title"> <h5>Take advantage of interactive, live learning in comfort of your home. Experts from MNCs and MAANG assist in online and offline project sessions at different project innovation centers around 7+ cities in India</h5>
                                                            </div>                                                        </li>
                                                        {/* <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.2 Building the composition 07:33 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.3 Photoshop Lighting effects 06:30 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.4 Digital Painting using photoshop brushes 08:34 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li>
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">2.5 Finalizing the details 10:30 minutes</div>
                                                            <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion03">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist3" aria-expanded="true" aria-controls="videolist3"><span>Project Certification</span> </button>
                                                </div>
                                                <div id="videolist3" className="accordion-collapse collapse show" aria-labelledby="accordion03" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">
                                                                <h5>Highlight your profile and get recognition from renowned industries worldwide. Work on latest capstones and achieve 1 project experience certificate from IBM.</h5>
                                                                
                                                                </div>
                                                                </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>

                                            <div className="accordion-item">
                                                <div className="accordion-header" id="accordion04">
                                                    <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist4" aria-expanded="true" aria-controls="videolist4"><span>2 Years Flexible Subscription</span> </button>
                                                </div>
                                                <div id="videolist4" className="accordion-collapse collapse show" aria-labelledby="accordion04" data-bs-parent="#accordionExample">
                                                    <ul className="lab-ul video-item-list">
                                                        <li className=" d-flex flex-wrap justify-content-between">
                                                            <div className="video-item-title">
                                                                <h5>Enjoy 2 years of limitless independence for accessing all the learning materials, live batches, and project sessions. Make your learning calendar as per your convenience. Professionals get to switch between weekdays and weekends.</h5>
                                                                
                                                                </div>
                                                                </li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Author />
                                {/* <Comment /> */}
                                {/* <Respond /> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-part">
                                <CourseSideDetail />
                                <CourseSideCetagory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default AdvanceDataScienceCertificationCourses;