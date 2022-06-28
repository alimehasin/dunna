import pick from './pick';

function omit<T>(count: number, array: T[]) {
  return pick(array.length - count, array);
}

export default omit;
