import Link from 'next/link'
import { Container, Title } from './style'
 
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