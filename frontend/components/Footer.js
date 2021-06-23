import Link from 'next/link'
import Image from 'next/image'
import {
  Container,
  Section,
  Header,
  A,
  SlackContainer,
  Description
} from '../styles/footer'

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
