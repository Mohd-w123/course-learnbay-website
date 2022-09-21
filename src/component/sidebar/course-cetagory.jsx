


const title = "More Courses";


const cscContentList = [
    {
        link: '#',
        left: 'Advanced Data Science and AI Program',
        right: '30',
    },
    {
        link: '#',
        left: 'Data Science and Artificial Intelligence Program',
        right: '20',
    },
    {
        link: '#',
        left: 'Artificial Intelligence and Machine Learning',
        right: '93',
    },
    {
        link: '#',
        left: 'Data Science and AI Program with 100% Job Guarantee',
        right: '54',
    },
    {
        link: '#',
        left: 'Full-Stack Software Development Program',
        right: '28',
    },
    {
        link: '#',
        left: 'Data Structures Algorithms And System Design',
        right: '30',
    },
]


const CourseSideCetagory = () => {
    return (
        <div className="course-side-cetagory">
            <div className="csc-title">
                <h5 className="mb-0">{title}</h5>
            </div>
            <div className="csc-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {cscContentList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left"><a href={val.link}>{val.left}</a></div>
                                {/* <div className="csdc-right">{val.right}</div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default CourseSideCetagory;