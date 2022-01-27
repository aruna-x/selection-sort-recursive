function selectionSortRecursive(arr) {
  switch(arr.length){
    case 0:
      return [];
    case 1:
      return arr;
    default:
      const min = Math.min(...arr);
      const ind = arr.indexOf(min);
      arr.splice(ind,1)
      return [min, ...selectionSortRecursive(arr)];
  }
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
 * 1. paraphrase
 * 
 * use recursion to sort array of nums (least to greatest)
 * 
 * 2. test
 * 
 * []
 * [1, 1]
 * [5, 4, 3, 2, 1]
 * 
 * 3. pseudocode
 * 4. code
 * 5. refactor
 * 6. optimize
 */
