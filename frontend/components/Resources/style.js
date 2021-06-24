import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & a {
    font-size: 1.2rem;
    margin: .5rem 0;
  }
`

export const Title = styled.h3`
  margin: 3rem 0 0 0;
  font-weight: bold;
  font-size: 1.5rem;
`

export const Description = styled.p`
  color: #515e72;
  font-size: 1.2rem;
  margin: 1rem 0;
`