import {
  Container,
  Title,
  Challenge
} from './style'

const KnowledgeCheck = ({ items }) => {
  console.log(items)
  return (
    <Container>
      <Title>Knowledge Check</Title>
      <ol>
        {items.map(item => (
            <Challenge key={item._id}>{item.challenge}</Challenge>
            //to do: implement tooltip with hint onhover
          ))
        }
      </ol>
    </Container>
  )
}

export default KnowledgeCheck