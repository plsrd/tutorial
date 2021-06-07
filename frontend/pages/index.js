import Head from 'next/head'
import Link from 'next/link'
import { sanityClient } from '../sanity'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
`
const Content = styled.div`
  margin: 6rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Heading = styled.h1`
  font-size: 5rem;
  color: #121923;
  font-weight: bold;
`
const Description = styled.p`
  margin: 4rem 0 3rem 0;
  font-weight: 300;
  font-size: 1.5rem;
  color: #515e72;
`

const ButtonContainer = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button  = styled.a`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${props => props.start ? '#1e63d0' : '#fff'};
  color: ${props => props.start ? '#fff' : '#515e72'};
  border: ${props => props.start ? 'none' : '1px solid #cad1dc'};
`


const Home = ({ data }) => {

  return (
    <div>
      <Head>
        <title>Sanity Tutorial</title>
        <meta name="description" content="A beginner's guide to Sanity" />
      </Head>
      <Layout>
        <Container>
          <Content>
            <Heading>New to Sanity?</Heading>
            <Description>Learn how to use the powerful unified content plaftorm here</Description>
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
  const query = `*[_type == 'section']{
    title,
    slug,
    description,
    icon,
    modules[]->{
      title
    }
  }`
  const data = await sanityClient.fetch(query)

  return {
    props: { data }
  }
}

export default Home
