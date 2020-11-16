import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Course = ({ _id, course_title, course_description, course_duration, removeCourse }) => {

  return(
    <tr>
      <td>{_id}</td>
      <td>{ course_title }</td>
      <td>{ course_description }</td>
      <td>{ course_duration }</td>
      <td>
        <button onClick={ () => removeCourse(_id) } className="Action-Button fa fa-trash"></button>
        <Link to={{ pathname: '/edit', search: _id }}>
         <button className="Action-Button fa fa-pencil"></button>
        </Link>
      </td>

    </tr>
  );
};

export default Course;
