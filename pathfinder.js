const findPath = (map, start, destination) => {
  const toKey = ([x, y]) => `${x}:${y}`;

  const queue = [];
  const directionModifiers = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]	  
  ];
  const visitedPoints = {};
  const parentPoints = {};
  const startKey = toKey(start);
  const destinationKey = toKey(destination);

  queue.push(start);
  visitedPoints[startKey] = true;

  while (queue.length) {
    const point = queue.shift();
    const mods = Object.values(directionModifiers);

    for (const [Ymod, Xmod] of mods) {
      const [originX, originY] = point;
      const x = originX + Xmod;
      const y = originY + Ymod;
      const neighborPoint = [x, y];
      const neighborKey = toKey(neighborPoint);	    

      if (x < 0 || y < 0) {
        continue;
      }
      if (y > map.length - 1 || x > map[y].length - 1) {
        continue;
      }
      if (map[y][x] === 1) {
        continue;
      }	    
      if (visitedPoints[neighborKey]) {
      	continue;
      }	    

      visitedPoints[neighborKey] = true;
      parentPoints[neighborKey] = point;
      queue.push(neighborPoint);

      if (neighborKey === destinationKey) {
	      break;
      }	    
    }	  	  
  }

  if (!parentPoints[destinationKey]) {
    return null;
  }

  const path = [];
  let currentPoint = destination;
  while (toKey(currentPoint) !== startKey) {
    path.push(currentPoint);
    currentPoint = parentPoints[toKey(currentPoint)];
  }

  path.push(start);
  path.reverse();

  return {
    path,
    steps: path.length - 1
  };  	
}

module.exports = { findPath };
