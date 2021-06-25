import styled from 'styled-components'

export const Container = styled.div`
  min-width: 150px;
  padding-top: 3rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
    & .module {
      color: #515e72;
      margin: .3rem 0;
      padding-left: .5rem;
    };
    & .current {
      font-size: 1.1rem;
      font-weight: bold;
      color: #2276fc;
      margin-bottom: .5rem;
    };
    & .icon {
      margin-left: .3rem;
      height: 15px;
    }
`