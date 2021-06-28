import styled from 'styled-components'

export const Container = styled.div`
  min-width: 150px;
  padding-top: 3rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .7rem;
  ${props => props.current? 
    `& .module {
      color: #515e72;
      margin: .5rem 0;
      padding-left: .5rem;
      font-size: .8rem;
    };
    & .title {
      font-size: 1rem;
      color: #2276fc;
      margin-bottom: .5rem;
    };
    & .icon {
      padding-bottom: .1rem;
      height: 10px;
    }`
    : 
    `
    & .title {
      color: #515e72;
      font-size: 1rem;
    }
    `
  }
    
`