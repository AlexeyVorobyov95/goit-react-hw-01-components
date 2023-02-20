import styled from '@emotion/styled';

export const Table = styled.table`
  width: 300px;
  margin: 30px auto 0px auto;
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.th`
    width: 100%;
    color: ${({ theme }) => {
    return theme.colors.text;
}};
    /* font-size: 24px; */
    font-weight: 700;
`
export const Head = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => {
      return theme.colors.tableBcOne;
    }};
  }
  &:nth-of-type(2n + 1) {
    background-color: ${({ theme }) => {
      return theme.colors.tableBcTwo;
    }};
  }
`;

export const Td = styled.td`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  padding: 9px;
  color: ${({ theme }) => {
    return theme.colors.white;
  }};
`;

export const Tbody = styled.tbody`
    
    
    
`
