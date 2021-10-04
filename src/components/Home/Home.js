import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import './Home.css'

const Home = () => {
    const [courses , setcourses] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setcourses(data))
    },[])

    return (
        <div>
            <div className='top d-flex align-items-center mb-2 text-center'>
                <div>
                <h1>Learn And Excel With Excilent Grade</h1>
                <button id='knowbutton'>Know More</button>
                </div>
            </div>
            <div className='courses'>
            {
                courses.map(course=> <Courses course={course} key={course.name}></Courses> )
            }
            </div>
        </div>
    );
};

export default Home;