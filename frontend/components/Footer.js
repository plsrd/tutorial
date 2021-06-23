import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`

const Section = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Header = styled.p`
  font-weight: bold;
  margin: .5rem 0;
`

const A = styled.a`
  margin: .5rem 0;
  color: #515e72;
`

const SlackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Description = styled.a`
  color: #515e72;
  margin: 1rem;
`

const Footer = () => {
  return (
    <footer>
      <Container>
        <Section>
          <Header>Sanity</Header>
          <Link href='https://www.sanity.io/'>
            <A>Platform</A>
          </Link>
          <Link href='https://www.sanity.io/docs'>
            <A>Documentation</A>
          </Link>
          <Link href='https://www.sanity.io/exchange'>
            <A>Exchange</A>
          </Link>
        </Section>
        <Section>
          <Header>Tutorial</Header>
          <Link href='/getting-started'>
            <A>Sections</A>
          </Link>
          <Link href='https://github.com/rlpennell/tutorial'>
            <A>Github</A>
          </Link>
        </Section>
      </Container>
      <SlackContainer>
        <Header>Have questions?</Header>
        <Description>Get help in the Sanity Slack community!</Description>
        <Link href='https://slack.sanity.io/'>
          <a><Image src='/slack.svg' width={30} height={30}/></a>
        </Link>
      </SlackContainer>
    </footer>
  )
}

export default Footer
