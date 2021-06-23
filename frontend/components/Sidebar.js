import Link from 'next/link'

import styled from 'styled-components'

const Container = styled.div`
  min-width: fit-content;
  height: 90%;
  padding-top: 3rem;
`

const Title = styled.a`
  font-size: 1.2rem;
`
 
const Sidebar = ({ sections, current }) => {
  return (
    <Container>
      {sections.map(section => (
        <Link href={`/${section.slug.current}`} key={section.title}> 
          <Title>{section.title}</Title>
        </Link>
      ))}
    </Container>
  )
}

export default Sidebar