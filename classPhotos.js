// It's photo day at the local school, and you're the photographer assignedt to take class photos. The class that you'll be photographing has an even number of students,
// and all these students are wearing red or blue shirts. In fact, exactly half of the
// class is wearing red shirts, and the other half is wearing blue shirts. You're
// responsible for arranging the students in two rows before taking the photos. Each
// row should contain the same number of students and should adhere to the following
// guidelines:

// -All students wearing red shirts must be in the same row.
// -All students wearing blue shirts must be in the same row.
// -Each student in the back row must be strictly taller than the students directly in fron of them in the front row.

// You're given two input arrays: One containing the heights of all the students with
// red shirts and another one containing the heights of all the students with blue
// shirts. These arrays will always have the same length, and each height will be a
// positive integer. Write a function that returns whether or not a class photo follows
// the stated guidelines can be taken.

// Note: You can assume that each class has at least 2 students.

// Sample input: blue = [2, 3, 5, 6, 9], red =  [1, 3, 4, 5, 8]
// Sample output: true (Place all students in blue shirts in back row.)

//naive approach: I think by looking at the conditions of the problem, we can likely
// sort each array in descending order to have the highest value in index[0] and then create a pointer for each array. These pointers can check whether the value that the pointer of the red array is less than the value of the pointer in the blue array. By running a loop, we can check that ALL red values are individually less than the blue values. If each red value is less than the blue values, we can return true. Otherwise, return false.

//blue = [2, 3, 5, 6, 9]
//red =  [1, 3, 4, 5, 8]

//time complexity: This is just like minimum wait time challenge, where we require log(n) time to sort the arrays and then (n) for the size of the input arrays.

//space complexity: This is also the same as the previous challenge, since we are sorting and looping in place and do not require any extra space in memory.

//O(nLog(n)) time || O(1) space complexity
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  let redPointer = 0;
  let bluePointer = 0;

  for (let i = 0; i < redShirtHeights.length; i++) {
    let redShirtHeight = redShirtHeights[i];
    let blueShirtHeight = blueShirtHeights[i];

    if (redShirtHeight > blueShirtHeight) {
      redPointer++;
    } else if (blueShirtHeight > redShirtHeight) {
      bluePointer++;
    } else {
      return false;
    }
  }
  return (
    redPointer === redShirtHeights.length ||
    bluePointer === redShirtHeights.length
  );
}
