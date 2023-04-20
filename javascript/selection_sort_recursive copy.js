function selectionSortRecursive(arr) {
  // naive solution n2
  if (arr.length <= 1) {
    return arr
  }
  const lowest = arr.reduce((a,b) =>a<b ? a : b);
  const ind = arr.indexOf(lowest);
  arr.splice(ind, 1);
  return [lowest, ...selectionSortRecursive(arr)];

  // can use Math.min(...arr)
  // remember that Math.min requires a list, not an array
}

if (require.main === module) {
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [5]");
  console.log("=>", selectionSortRecursive([5]));

  console.log("");

  console.log("Expecting: [1, 1]");
  console.log("=>", selectionSortRecursive([1, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3, 4, 5]");
  console.log("=>", selectionSortRecursive([5, 4, 3, 2, 1]));

  console.log("");
}

module.exports = selectionSortRecursive;

/**
 * 
 */
