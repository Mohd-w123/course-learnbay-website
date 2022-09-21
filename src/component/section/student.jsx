
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "";
const title = "Global Industry Certification";


const studentList = [
    {
        // imgUrl: 'assets/images/feedback/student/01.jpg',
        // imgAlt: 'student rajibraj91 rajibraj',
        name: 'Work on Domain Specialised Capstone Projects With IBM to get handson experience',
        // degi: 'Working in HCL',
        desc: 'Upon Successful completion of the course, you will receive the globally recognised certificate from IBM which helps you to get industry ready',
    },

]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src="assets/images/feedback/certificate.png" alt="student feedback" />
                                    {/* <a href="https://www.youtube.com/watch?v=A7EEoXomoPs" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    {/* <img src={`${val.imgUrl}`} alt={val.imgAlt} /> */}
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                </div>
                                            </div>
                                            {/* <div className="sft-right">
                                                <Rating />
                                            </div> */}
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;