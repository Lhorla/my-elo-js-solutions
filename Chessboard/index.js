let chessBoard = ""
let size = 8

for (x = 0; x < size; x++) {
    for (y = 0; y < size; y++) {
      if ((x + y) % 2 == 0) {
        chessBoard += " "
      }
      else {
        chessBoard += "#"
      }
    }
    chessBoard += "\n"
}

console.log(chessBoard)