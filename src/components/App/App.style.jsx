import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
// import second from 'modern-normalize';

export const Container = styled.div`
width: 100%;
margin: auto;
padding: 10px;
background-color: ${({ theme }) => {
  return (
    theme.colors.gainsboro
  );
}};
`

export const GlobalStyle = (props) => {
  return (
    <Global
      styles={css`
        body {
          font-family: sans-serif;
          line-height: 1.5;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
        ul,
        ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}
    />
  );
}