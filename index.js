const { findPath } = require('./pathfinder');

const map = [
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
];

const start = [0, 0];
const goal = [4, 4];

const result = findPath(map, start, goal);

console.log(result);
