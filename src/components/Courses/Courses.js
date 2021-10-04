import { Link } from 'react-router-dom';
import './Courses.css'

const Courses = (props) => {
  const {name , instructor, time, intro, id, img} = props.course

    return (
        <div>
            <div className='course'>
            <h2 id='name'>{name}</h2>
            <div className="all">
                <img className='image' src={img} alt="" />
                <div className='info'>
                    <h4>Instructor: {instructor}</h4>
                    <p>Course Duration: {time}</p>
                    <p>Note: {intro}</p>
                </div>
            </div>
            <Link to={`/learnmore/${id}`}><button id='continue'>Continue</button></Link>
        </div>
        </div>
    );
};

export default Courses;