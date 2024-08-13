export default function hasValuesFromArray(set, array) {
  let verdict = true;
  array.map((x) => {
    if (!set.has(x)) {
      verdict = false;
    }
  });

  return verdict;
}
