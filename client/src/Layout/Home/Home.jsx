import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Course from "../../components/Course/Course";

class Home extends Component {
  state = {
    data: null,
    allCourses: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/api/courses/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeCourse = async id => {
    try {
      const studentRemoved = await axios.delete(`/api/courses/${id}`);
      const courses = await axios("/api/courses/");
      this.setState({ data: courses.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    let courses;

    if (this.state.data)
      courses =
        this.state.data.courses &&
        this.state.data.courses.map(course => (
          <Course key={course._id} {...course} removeCourse={this.removeCourse} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.courses.length)
        return <h1 className="No-Students">No Courses!</h1>;

    return (
      <div className="Table-Wrapper">
        <h1>Courses:</h1>
        <table className="Table">
          <thead>
            <tr>
              <th>Course_Id</th>
              <th>Course_Title</th>
              <th>Course_Description</th>
              <th>Course_Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{courses}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;
