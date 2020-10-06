import React from 'react'
import "./course.styles.scss"

export const Course = ({name}) => {
  return (
    <div className = "course-container">
      <h4>{name}</h4>
    </div>
  )
}