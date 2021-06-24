import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`

export const Section = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Header = styled.p`
  font-weight: bold;
  margin: .5rem 0;
`

export const A = styled.a`
  margin: .5rem 0;
  color: #515e72;
`

export const SlackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.a`
  color: #515e72;
  margin: 1rem;
`