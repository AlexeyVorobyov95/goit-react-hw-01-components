import {
  Title,
  Container,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.style';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <Container class="statistics">
      <Title class="title">{title}</Title>
      <StatList class="stat-list">
        {stats.map(stat => {
          return (
            <Item id={stat.id} class="item">
              <Label class="label">{stat.label}</Label>
              <Percentage class="percentage">{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Container>
  );
};

Statistics.PropTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};