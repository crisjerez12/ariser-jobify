import { useState } from 'react';

import AreaChartContainer from './AreaChartComponent';
import Wrapper from '../assets/wrappers/ChartsContainer';
import BarChartComponent from './BarChartComponent';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? (
        <BarChartComponent data={data} />
      ) : (
        <AreaChartContainer data={data} />
      )}
    </Wrapper>
  );
};
export default ChartsContainer;
