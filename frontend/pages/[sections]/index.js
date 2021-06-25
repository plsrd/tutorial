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
  const { title, description, slug, modules } = data
  return (
    <Layout current={title}> 
      <Container>
        <Header>{title}</Header>
        <Description>{description}</Description>
        <div>
          <ModuleHeader>Learning Modules</ModuleHeader>
          <ul>
            {modules.map(module => (
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
            <Link href={`/${slug.current}/${modules[0].slug.current}`}>
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
    title
  }[0]`
  const data = await sanityClient.fetch(query, {
    slug: params.sections
  })

  return {
    props: { data: data }
  }
}

export default Section