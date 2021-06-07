import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import styles from '../../styles/Section.module.css'
import styled from 'styled-components'

import Layout from '../../components/Layout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem 2rem 0 4rem;
  min-height: 100vh;
  overflow: scroll; 
`

const Header = styled.h2`
  width: fit-content;
  font-size: 3rem;
  font-weight: bold;
`

const Description = styled.p` 
  margin: 2rem 0;
  line-height: 1.4;
  font-size: 1.3rem;
  color: #515e72;
`

const ModuleHeader = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 1.5rem 0;
`

const Item = styled.li`
  margin: 1rem;
  font-size: 1.2rem;
`

const Module = styled.a`
  color: #1e63d0;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  margin: 6rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.a`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: #1e63d0;
  cursor: pointer;
  margin-left: auto;
  color: #fff
`
 
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