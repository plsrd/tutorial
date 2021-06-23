import styled from 'styled-components'

const Header = styled.h3`
  margin: 1.5rem 0;
  font-weight: bold;
  font-size: 1.5rem;
`

const Item = styled.li`
  line-height: 1.4;
  font-size: 1.3rem;
  color: #515e72;
`

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
