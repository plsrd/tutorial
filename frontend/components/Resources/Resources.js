import Link from 'next/link'
import { 
  Container,
  Title,
  Description,
  A
} from './style'


const Resources = ({ resources }) => {
  return (
    <Container>
      <Title>Additional Resources</Title>
      <Description>Checkout these resources for a deeper dive into this module's topics</Description>
      {
        resources.map(resource => (
          <Link key={resource._key} href={resource.link}>
            <A>{resource.text}</A>
          </Link>
        ))
      }
    </Container>
  )
}

export default Resources
