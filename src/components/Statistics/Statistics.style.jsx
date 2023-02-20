import styled from '@emotion/styled';
import { getRandomColor } from './RandomColor'


export const Container = styled.section`
  width: 300px;
  margin: auto;
  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border-radius: 10px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  color: ${({ theme }) => {
    return theme.colors.text;
  }}; ;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  width: 75px;
  background-color: ${getRandomColor};
  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => {
    return theme.colors.white;
}};
  padding-top: 10px;
`;

export const Percentage = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => {
    return theme.colors.white;
}};
  padding-bottom: 10px;
`;
