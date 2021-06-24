import { sanityClient, PortableText } from '../../../sanity'

import Layout from '../../../components/Layout'
import LearningOutcomes from '../../../components/LearningOutcomes/LearningOutcomes'
import NavButtons from '../../../components/NavButtons/NavButtons'
import LessonPlan from '../../../components/LessonPlan/LessonPlan'
import Resources from '../../../components/Resources/Resources'

import {
    Container,
    Title,
    Header,
    Text
} from './style'

const Module = ({ data }) => {
  const {
    title,
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