import React, { Component } from "react";
import './AddCourse.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddStudent extends Component {
  state = {
    course_title: "",
    course_description: "",
    course_duration: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
    e.preventDefault();
    try {
      const newCourse = await axios.post("/api/courses/", {
          course_title: this.refs.course_title.value,
          course_description: this.refs.course_description.value,
          course_duration: this.refs.course_duration.value
        }
      );

      toast("Student " + newCourse.data.newCourse.course_title + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddStudent-Wrapper">
        <h1>Add Course:</h1>
        <form onSubmit={this.addStudent}>
          <label htmlFor="course_title">course_title</label>
          <input
            type="text"
            placeholder="Enter the name of the Title here"
            name="course_title"
            onChange={this.onChangeHandler}
            ref="course_title"
            className="Add-Course-Input"
            required
            id="course_title"
          />
          <label htmlFor="course_description">course_description</label>
          <input
            type="text"
            placeholder="enter your course description"
            name="course_description"
            onChange={this.onChangeHandler}
            ref="course_description"
            className="Add-Course-Input"
            required
            id="course_description"
          />
          <label htmlFor="course_duration">course_duration</label>
          <input
            type="number"
            placeholder="Enter duration in Days"
            name="course_duration"
            min="1"
            max="360"
            onChange={this.onChangeHandler}
            ref="course_duration"
            className="Add-Course-Input"
            required
            id="course_duration"
          />
          <button type="submit" className="Add-Course-Submit">Submit</button>
          <button type="reset" className="Add-Course-Reset">Refresh</button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddStudent;
