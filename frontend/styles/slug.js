import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem 2rem 0 4rem;
  min-height: 100vh;
  overflow: scroll;
`

export const Header = styled.h2`
  width: fit-content;
  font-size: 3rem;
  font-weight: bold;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin: 1.5rem 0;
  margin: 3rem 0 1rem 0;
`

export const Text = styled.div`
  margin: 2rem 0;
  line-height: 1.4;
  font-size: 1.3rem;
  color: #515e72;
`