import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem 2rem 0 4rem;
  min-height: 70vh;
  overflow: scroll; 
`

export const Header = styled.h2`
  width: fit-content;
  font-size: 3rem;
  font-weight: bold;
`

export const Description = styled.p` 
  margin: 2rem 0;
  line-height: 1.4;
  font-size: 1.3rem;
  color: #515e72;
`

export const ModuleHeader = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 1.5rem 0;
`

export const Item = styled.li`
  margin: 1rem;
  font-size: 1.2rem;
`

export const Module = styled.a`
  color: #2276fc;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  margin: 6rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
`

export const Button = styled.a`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: #2276fc;
  cursor: pointer;
  color: #fff
`