import React from 'react'
import './course-list.styles.scss'

import {Course} from '../course/course.component'

export const CourseList = ({courses}) => {
  return (
    <div className = 'course-list'>
    {courses.map((course) => (
      <Course key ={course.id} name = {course.name} ></Course>
    ))}
    </div>
  )
}