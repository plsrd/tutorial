import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
`
export const Content = styled.div`
  margin: 6rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 5rem;
  color: #121923;
  font-weight: bold;
`
export const Description = styled.p`
  margin: 4rem 0 3rem 0;
  font-weight: 300;
  font-size: 1.5rem;
  color: #515e72;
`

export const ButtonContainer = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button  = styled.a`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${({start}) => start ? '#1e63d0' : '#fff'};
  color: ${({start}) => start ? '#fff' : '#515e72'};
  border: ${({start}) => start ? 'none' : '1px solid #cad1dc'};
  cursor: pointer;
`