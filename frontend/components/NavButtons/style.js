import styled from 'styled-components'

export const Button = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: #2276fc;
  cursor: pointer;
  ${props => props.next ? 'margin-left: auto;' : ''}
`

export const Container = styled.div`
  margin: 6rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const A = styled.a`
  color: #fff;
`