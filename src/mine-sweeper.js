const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const array = [];
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    let str = [];
    for (let j = 0; j <matrix[0].length; j++) {      
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) num++;     
      if (i > 0 && matrix[i - 1][j]) num++;      
      if (i > 0 && j+1 < matrix[0].length && matrix[i - 1][j + 1]) num++;      
      if (j > 0 && matrix[i][j - 1]) num++;      
      if (j+1 < matrix[0].length && matrix[i][j + 1]) num++;     
      if (i+1 < matrix.length && j > 0 && matrix[i + 1][j - 1]) num++;     
      if (i+1 < matrix.length && matrix[i + 1][j]) num++;      
      if (i+1 < matrix.length && j < matrix[0].length - 1 && matrix[i + 1][j + 1]) num++;
       
      str.push(num)
      num = 0;
    }
    
    array.push(str)
  }
  
  return array  
}

module.exports = {
  minesweeper
};
