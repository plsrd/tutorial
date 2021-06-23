import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin: 3rem 0 0 0;
  font-weight: bold;
  font-size: 1.5rem;
`

const Description = styled.p`
  color: #515e72;
  font-size: 1.2rem;
  margin: 1rem 0;
`

const A = styled.a`
  font-size: 1.2rem;
  margin: .5rem 0;
`


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
