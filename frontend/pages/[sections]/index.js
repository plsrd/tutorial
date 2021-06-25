import { sanityClient } from '../../sanity'
import Link from 'next/link'
import Layout from '../../components/Layout'

import {
  Container,
  Header,
  Description,
  ModuleHeader,
  Item,
  Module,
  ButtonContainer,
  Button
} from '../../styles/section'

 
const Section = ({ data }) => {
  const { title, description, slug, modules, allSections } = data
  
  const currentIndex = allSections.order.findIndex(section => section.title === title)

  return (
    <Layout current={title}> 
      <Container>
        <Header>{title}</Header>
        <Description>{description}</Description>
        <div>
          {modules && <ModuleHeader>Learning Modules</ModuleHeader>}
          <ul>
            {modules && modules.map(module => (
              <Item key={module.title}>
                <Link href={`/${slug.current}/${module.slug.current}`}>
                  <Module>
                  {module.title}
                  </Module>
                </Link>
              </Item>
            ))}
          </ul>
        </div>
        <ButtonContainer>
            <Link 
              href={modules ? 
                `/${slug.current}/${modules[0].slug.current}`
                : 
                `/${allSections.order[currentIndex + 1].slug}`
              }>
              <Button>Next</Button>
            </Link>
        </ButtonContainer>
      </Container>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'section' && defined(slug.current)][].slug.current`
  const paths = await sanityClient.fetch(query)

  return {
    paths: paths.map(sections => ({ params: { sections } })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == 'section' && slug.current == $slug]{
    description,
    icon,
    modules[]->{
      title,
      slug
    },
    slug,
    title,
    'allSections': *[_type == 'orderSections'][0]{
      order[]->{
        title,
        'slug': slug.current
      }
    }
  }[0]`
  const data = await sanityClient.fetch(query, {
    slug: params.sections
  })

  return {
    props: { data: data }
  }
}

export default Section