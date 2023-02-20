import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child){
    margin-bottom: 10px;
  }
  outline: 1px solid ${({ theme }) => {
    return theme.colors.text;
  }};
  border-radius: 10px;
  
`;

export const List = styled.ul`
  width: 300px;
  margin: 30px auto 0px auto;
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border-radius: 10px;
  padding: 10px;
`;

export const StatusIcon = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${( {status, theme} ) => {
   return status ? theme.colors.green : theme.colors.red;
}};

`;
export const Status = styled.span`
  margin: 0px 35px 0px 10px;
`;

export const Avatar = styled.img`
width: 80px;
height: auto;
margin-right: 35px;
`;

export const Name = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => {
    return theme.colors.text;
}};
`


