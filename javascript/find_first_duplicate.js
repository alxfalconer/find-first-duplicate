function findFirstDuplicate(arr) {
  const uniques = new Set();

  for (const value of arr) {
    if (uniques.has(value)) {
      return value;
    }

    uniques.add(value);
  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log(findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([]));

  console.log("");

  console.log("Expecting: -1");
  console.log(findFirstDuplicate([5]));

  console.log("");

  console.log("Expecting: 7");
  console.log(findFirstDuplicate([7, 1, 2, 3, 7]));
}

module.exports = findFirstDuplicate;