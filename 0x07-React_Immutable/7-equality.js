import immutable from 'immutable';

const { is } = immutable;
const areMapsEqual = (map1, map2) => {
  return is(map1, map2);
};

export default areMapsEqual;
