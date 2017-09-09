import getData from './getData';
import getPart from './getPart';

export default ({ id, measureCount, notes, position, trackId }) => {
  const data = getData(measureCount, notes);
  return {
    part: getPart({ data, measureCount, position }),
    data,
    id,
    measureCount,
    position,
    trackId,
  };
};
