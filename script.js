function findMajorityElement(arr) {
  let majorityElement;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majorityElement = arr[i];
      count = 1;
    } else if (majorityElement === arr[i]) {
      count++;
    } else {
      count--;
    }
  }

  return majorityElement;
}