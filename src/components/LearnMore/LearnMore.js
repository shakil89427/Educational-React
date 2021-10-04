import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './Learnmore.css'
import { useEffect, useState } from 'react';

const LearnMore = () => {
    const {abc} = useParams()
    const [courses , setcourses] = useState([]);

    useEffect(()=>{
        fetch('../../data.json')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[]);
     const course = courses.find(singlecourse=>singlecourse.id==abc)
     

    return (
        <div>
            <div className="stages">

                <div className="stage">
                    <img src={course?.basic?.img} alt="" />
                    <h2>{course?.basic?.name}</h2>
                    <h4>Fee: ${course?.basic?.fee}</h4>
                    <h4>Class Duration: {course?.basic?.classduration}</h4>
                    <button>Enrrol Now</button>
                </div>

                <div className="stage">
                    <img src={course?.intermediate?.img} alt="" />
                    <h2>{course?.intermediate?.name}</h2>
                    <h4>Fee: ${course?.intermediate?.fee}</h4>
                    <h4>Class Duration: {course?.intermediate?.classduration}</h4>
                    <button>Enrrol Now</button>
                </div>

                <div className="stage">
                    <img src={course?.Advance?.img} alt="" />
                    <h2>{course?.Advance?.name}</h2>
                    <h4>Fee: ${course?.Advance?.fee}</h4>
                    <h4>Class Duration: {course?.Advance?.classduration}</h4>
                    <button>Enrrol Now</button>
                </div>

            </div>


            <div className="button"><Link to='/home'><button id='btn'>Back to Courses</button></Link></div>
        </div>
    );
}
export default LearnMore;