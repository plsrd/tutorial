import { PortableText } from '../sanity'
import styles from '../styles/Section.module.css'

const LessonPlan = ({lessonPlan}) => {

  return (
    <div className={styles.lessonPlanContainer}>
      {
        lessonPlan.map(lesson => (
          <div className={styles.lessonComponent}>
            <h3 className={styles.learningHeader}>{lesson.title}</h3>
            <PortableText blocks={lesson.content} />
          </div>
        ))
      }

    </div>
  )

}

export default LessonPlan
