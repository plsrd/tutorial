import Challenge from '../Challenge/Challenge'

import {
  Container,
  Title,
} from './style'

const KnowledgeCheck = ({ items }) => {
  return (
    <Container>
      <Title>Knowledge Check</Title>
        {items.map(item => (
            <Challenge challenge={item} />
          ))
        }
    </Container>
  )
}

export default KnowledgeCheck