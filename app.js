let size = 8;
let board = '';

for (let b = 0; b < size; b++) {
  for (let a = 0; a < size; a++) {
    if ((a + b) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);