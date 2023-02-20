import {
  Title,
  Container,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StatList>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Container>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequiped,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      ip: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};