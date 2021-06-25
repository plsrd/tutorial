import Link from 'next/link'
import { Container, Wrapper } from './style'
import { FaArrowRight } from 'react-icons/fa'
 
const Sidebar = ({ sections, current }) => {
  return (
    <Container>
      {sections.map(section => section.title === current ? 
      (
        <Wrapper>
          <Link href={`/${section.slug.current}`} key={section.title}> 
            <a className='current'>{section.title}<FaArrowRight className='icon'/></a>
          </Link>
          {section.modules.map(module => (
            <Link href={`/${section.slug.current}/${module.slug.current}`}>
              <a className='module'>{module.title}</a>
            </Link>
          ))}
        </Wrapper>
      )
      :
      (
        <Link href={`/${section.slug.current}`} key={section.title}> 
          <a>{section.title}</a>
        </Link>
      ))}
    </Container>
  )
}

export default Sidebar