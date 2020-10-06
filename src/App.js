import React, { Component } from "react";
import "./App.css";
import { CourseList } from "./components/course-list/course-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import COURSE_DATA from './courses.data.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      courses: COURSE_DATA,
      searchField: "",
    };
  }


  render() {
    const { courses, searchField } = this.state;
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Classes"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CourseList courses={filteredCourses} />
      </div>
    );
  }
}

export default App;
