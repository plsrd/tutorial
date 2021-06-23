import { PortableText } from '../sanity'
import { Header, Container } from '../styles/lessonPlan'


const LessonPlan = ({lessonPlan}) => {
  return (
    <div >
      {
        lessonPlan.map(lesson => (
          <Container>
            <Header>{lesson.title}</Header>
            <PortableText blocks={lesson.content} />
          </Container>
        ))
      }
    </div>
  )
}

export default LessonPlan
