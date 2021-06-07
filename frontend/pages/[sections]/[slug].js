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
        <h2 className={styles.lessonHeader}>{parent.title}</h2>
        <p className={`${styles.moduleHeader} ${styles.moduleTitle}`}>{title}</p>
        <div className={styles.sectionText}>
          <PortableText blocks={introduction} />
        </div>
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