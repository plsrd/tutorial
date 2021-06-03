import styles from '../styles/Section.module.css'

const LearningOutcomes = ({outcomes}) => {
  return (
  <div className={styles.learningOutcomes}>
  <h3 className={styles.learningHeader}>Learning Outcomes</h3>
  <ul>
  {
    outcomes.map((outcome, index) => (
      <li key={index}>{outcome}</li>
    ))
  }
  </ul>
</div>
  )
}

export default LearningOutcomes
