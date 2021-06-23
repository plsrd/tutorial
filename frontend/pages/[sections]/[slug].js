import { sanityClient, PortableText } from '../../sanity'
import Link from 'next/link'

import Layout from '../../components/Layout'
import LearningOutcomes from '../../components/LearningOutcomes'
import NavButtons from '../../components/NavButtons'
import LessonPlan from '../../components/LessonPlan'

import styles from '../../styles/Section.module.css'
import styled from 'styled-components'
import Resources from '../../components/Resources'

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

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin: 1.5rem 0;
  margin: 3rem 0 1rem 0;
`

const Text = styled.div`
  margin: 2rem 0;
  line-height: 1.4;
  font-size: 1.3rem;
  color: #515e72;
`

const Module = ({ data }) => {
  const {
    title,
    slug,
    lessonPlan,
    learningOutcomes,
    introduction,
    additionalResources,
    parent
  } = data

  return (
    <Layout current={parent.title}>
      <Container>
        <Header>{parent.title}</Header>
        <Title>{title}</Title>
        <Text>
          <PortableText blocks={introduction} />
        </Text>
        <LearningOutcomes outcomes = {learningOutcomes} />
        <LessonPlan lessonPlan={lessonPlan}/>
        {
          additionalResources ?
            <Resources resources={additionalResources} />
          :
          null
        }
        
        <NavButtons 
          parent={parent} 
          title={title}
        />
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'module' && slug.current == $slug]{
    title,
    slug,
    lessonPlan,
    learningOutcomes,
    introduction,
    additionalResources,
    'parent': *[_type == 'section' && references(^._id)][0]{
      title,
      slug,
      modules[]->{
        title,
        slug
      }
    }
  }`

  const data = await sanityClient.fetch(query, {
    slug: params.slug
  })

  return {
    props: { data: data[0] }
  }
}

export default Module