import Head from 'next/head'
import Link from 'next/link'
import { sanityClient } from '../sanity'

import Layout from '../components/Layout'

import {
  Container,
  Content,
  Heading,
  Description,
  ButtonContainer,
  Button,
} from '../styles/home'

const Home = ({ data }) => {
  const { header, description } = data
  return (
    <div>
      <Head>
        <title>Sanity Tutorial</title>
        <meta name="description" content="A beginner's guide to Sanity" />
      </Head>
      <Layout>
        <Container>
          <Content>
            <Heading>{header}</Heading>
            <Description>{description}</Description>
          </Content>
          <ButtonContainer>
            <Link href='/getting-started'>
              <Button start='true'>Start Learning</Button>
            </Link>
            <Link href='https://www.sanity.io/docs'>
              <Button>Documentation</Button>
            </Link>
          </ButtonContainer>
        </Container>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const query = `*[_type == 'landingPage'][0]{
    header,
    description
  }`
  const data = await sanityClient.fetch(query)

  return {
    props: { data }
  }
}

export default Home
