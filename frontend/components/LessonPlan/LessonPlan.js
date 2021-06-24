import { PortableText } from '../../sanity'
import { Header, Container } from './style'


const LessonPlan = ({lessonPlan}) => {
  return (
    <div >
      {
        lessonPlan.map(lesson => (
          <Container key={lesson._key}>
            <Header>{lesson.title}</Header>
            <PortableText blocks={lesson.content} />
          </Container>
        ))
      }
    </div>
  )
}

export default LessonPlan
