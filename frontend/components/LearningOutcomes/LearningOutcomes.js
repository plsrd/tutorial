import { Header, Item } from "./style"

const LearningOutcomes = ({ outcomes }) => {
  return (
  <div>
    <Header>Learning Outcomes</Header>
    <ul>
    {
      outcomes.map((outcome, index) => (
        <Item key={index}>{outcome}</Item>
      ))
    }
    </ul>
  </div>
  )
}

export default LearningOutcomes
