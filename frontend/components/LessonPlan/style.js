import styled from 'styled-components'

export const Header = styled.h3`
  margin: 2rem 0;
  font-weight: bold;
  font-size: 1.5rem;
`

export const Container = styled.div`
  & p {
    font-size: 1.2rem;
    line-height: 1.4;
    color: #515e72;
    margin: 1rem 0;
  };
  & h4 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 2rem 0;
  };
  & h5 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1.5rem 0;
  };
  & img {
    width: 100%;
    border: 1px solid #515e72;
    margin: 1rem 0;
  }
`