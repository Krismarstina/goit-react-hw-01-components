import PropTypes from 'prop-types';
import { Wrapper, StatList, Title, Percentage } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => {
          return (
            <li key={stat.id} className="item">
              <span className="label">
                {stat.label}
                <br></br>
              </span>

              <Percentage>{stat.percentage} %</Percentage>
            </li>
          );
        })}
      </StatList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
