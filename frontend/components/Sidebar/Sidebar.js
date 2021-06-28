import Link from 'next/link'
import { Container, Wrapper } from './style'
import { FaArrowRight } from 'react-icons/fa'
 
const Sidebar = ({ sections, current }) => {
  return (
    <Container>
      {sections.map(section => section.title === current ? 
      (
        <Wrapper current key={section.title}>
          <Link href={`/${section.slug.current}`}> 
            <a className='title'>{section.title}<FaArrowRight className='icon'/></a>
          </Link>
          {section.modules && section.modules.map(module => (
            <Link href={`/${section.slug.current}/${module.slug.current}`}>
              <a className='module'>{module.title}</a>
            </Link>
          ))}
        </Wrapper>
      )
      :
      (
        <Wrapper key={section.title}>
          <Link href={`/${section.slug.current}`}> 
            <a className='title'>{section.title}</a>
          </Link>
        </Wrapper>
      ))}
    </Container>
  )
}

export default Sidebar