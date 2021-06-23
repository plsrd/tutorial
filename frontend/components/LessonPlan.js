import { PortableText } from '../sanity'
import React from 'react'
import styled from 'styled-components'

const Header = styled.h3`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 1.5rem;
`

const LessonPlan = ({lessonPlan}) => {
  return (
    <div >
      {
        lessonPlan.map(lesson => (
          <div>
            <Header>{lesson.title}</Header>
            <PortableText blocks={lesson.content} />
          </div>
        ))
      }
    </div>
  )
}

export default LessonPlan
