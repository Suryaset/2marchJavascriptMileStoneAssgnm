
// const prompt = require ("prompt-sync")({sigint: true})

const marks = [];

for (let i = 0; i < 5; i++) {
  const mark = parseInt(prompt(`Enter the mark for student ${i + 1}:`));
  marks.push(mark);
}

const highestMark = marks.reduce((a, b) => a > b ? a : b);

console.log("The highest mark is: " + highestMark);
