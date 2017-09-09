import createData from './createData';
import createPart from './createPart';

export default function createSequence({ id, measureCount, notes, position, trackId }) {
  const data = createData(measureCount, notes);
  return {
    part: createPart({ data, measureCount, position }),
    data,
    id,
    measureCount,
    position,
    trackId,
  };
}
