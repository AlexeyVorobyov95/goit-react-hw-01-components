import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  text-align: center;
  margin: 0px auto 30px auto;
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  padding: 10px;
  border-radius: 10px;
`;

export const Avatar = styled.img`
    margin: 0px auto 20px auto;
    border-radius: 50%;
    background-color: ${({ theme }) => {
      return theme.colors.white;
    }};
    outline: 1px solid gray;
    box-shadow: 1px 5px 10px 5px rgb(196 189 189 / 20%);
    
`;

export const Text = styled.p`
    margin-bottom: 5px;
    color: ${({ theme }) => {
        return theme.colors.text;
    }};
   font-weight: ${({ name }) => {
    return name === 'name' ? '700' : '400'
    }};
    font-size: ${props => {
        switch (props.name) {
            case 'name':
                return '24px';
            default:
                return '14px';
        }
    }};
`
export const ListStats = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => {
    return theme.colors.text;
    }};
`
export const Quantity = styled.span`
    color: ${({ theme }) => {
    return theme.colors.text;
}};
    font-size: 14px;
`