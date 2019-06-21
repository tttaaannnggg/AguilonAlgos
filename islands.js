
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
