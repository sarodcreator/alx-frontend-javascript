export default function hasValuesFromArray(set, array) {
  verdict = false;
  array.map((x) => {
    if (set.has(array)) {
    verdict = true;
    }
  });
  return verdict;
}
