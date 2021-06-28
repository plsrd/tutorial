import { useState } from 'react'
import { PortableText } from '../../sanity'
import { BiCaretRight, BiCaretDown } from 'react-icons/bi'

import {
  Container,
  Title,
  Hint
} from './style'



const Challenge = ({ challenge }) => {
  const [ collapsed, setCollapsed ] = useState(false)

  const handleClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Container onClick={handleClick}>
      <Title>
        {collapsed ?  <BiCaretDown /> : <BiCaretRight />}
        <PortableText 
          blocks={challenge.challenge}
        />
      </Title>
      {collapsed  && 
        <Hint>
          <PortableText blocks={challenge.hint} />
        </Hint>
      }
    </Container>
  )
}

export default Challenge