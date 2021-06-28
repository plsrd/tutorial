import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  display: flex;
  margin: 1rem;
  cursor: pointer;
  align-items: center;
  color: #2276fc;
  & p {
    font-size: 1.2rem;
    padding-left: .2rem;
  }
  & code {
    color: #515e72;
  }
`

export const Hint = styled.div`
  margin: 1rem 1rem 1rem 3rem;
  & p {
    line-height: 1.4;
    font-size: 1.2rem;
    color: #515e72;
    margin-bottom: 1rem;
  }
`