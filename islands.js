
/*
 * Number of Islands 
 * https://leetcode.com/problems/number-of-islands/
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * Example 1:
 *
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * Output: 1
 *
 * Example 2:
 *
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * Output: 3
*/

const map = [
  ['0','0','0','0','0'],
  ['0','0','0','0','0'],
  ['0','0','0','0','0']
];
let number = 1;

function mapOneIsland(x,y,grid, name){
  if(grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === '0'){
    return
  }
  if (!map[x]){
    map[x] = [];
  }
  if (map[x][y] === name){
    return
  }
  map[x][y] = name;
  const neighbors = [
    [x-1,y],
    [x+1,y],
    [x,y-1],
    [x,y+1]
  ]
  for (let i = 0; i < neighbors.length; i++){
    mapOneIsland(neighbors[i][0],neighbors[i][1],grid,name);
  }
  return map;
}

const landMap = [
  ['1','0','0','0','0'],
  ['1','0','0','1','0'],
  ['1','0','0','1','0']
];

console.log(landMap);
console.log(mapOneIsland(0,0,landMap,'a'));

console.log(mapOneIsland(1,3,landMap,'b'));
