import '../../node_modules/kontra/kontra'
const letters = {
  'A': [
    [, 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1]
  ],
  'B': [
    [1, 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
    [1, 1]
  ],
  'C': [
    [1, 1, 1],
    [1],
    [1],
    [1],
    [1, 1, 1]
  ],
  'D': [
    [1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1]
  ],
  'E': [
    [1, 1, 1],
    [1],
    [1, 1, 1],
    [1],
    [1, 1, 1]
  ],
  'F': [
    [1, 1, 1],
    [1],
    [1, 1],
    [1],
    [1]
  ],
  'G': [
    [, 1, 1],
    [1],
    [1, , 1, 1],
    [1, , , 1],
    [, 1, 1]
  ],
  'H': [
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
    [1, , 1]
  ],
  'I': [
    [1, 1, 1],
    [, 1],
    [, 1],
    [, 1],
    [1, 1, 1]
  ],
  'J': [
    [1, 1, 1],
    [, , 1],
    [, , 1],
    [1, , 1],
    [1, 1, 1]
  ],
  'K': [
    [1, , , 1],
    [1, , 1],
    [1, 1],
    [1, , 1],
    [1, , , 1]
  ],
  'L': [
    [1],
    [1],
    [1],
    [1],
    [1, 1, 1]
  ],
  'M': [
    [1, 1, 1, 1, 1],
    [1, , 1, , 1],
    [1, , 1, , 1],
    [1, , , , 1],
    [1, , , , 1]
  ],
  'N': [
    [1, , , 1],
    [1, 1, , 1],
    [1, , 1, 1],
    [1, , , 1],
    [1, , , 1]
  ],
  'O': [
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1]
  ],
  'P': [
    [1, 1, 1],
    [1, , 1],
    [1, 1, 1],
    [1],
    [1]
  ],
  'Q': [
    [0, 1, 1],
    [1, , , 1],
    [1, , , 1],
    [1, , 1, 1],
    [1, 1, 1, 1]
  ],
  'R': [
    [1, 1],
    [1, , 1],
    [1, , 1],
    [1, 1],
    [1, , 1]
  ],
  'S': [
    [1, 1, 1],
    [1],
    [1, 1, 1],
    [, , 1],
    [1, 1, 1]
  ],
  'T': [
    [1, 1, 1],
    [, 1],
    [, 1],
    [, 1],
    [, 1]
  ],
  'U': [
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1]
  ],
  'V': [
    [1, , , , 1],
    [1, , , , 1],
    [, 1, , 1],
    [, 1, , 1],
    [, , 1]
  ],
  'W': [
    [1, , , , 1],
    [1, , , , 1],
    [1, , , , 1],
    [1, , 1, , 1],
    [1, 1, 1, 1, 1]
  ],
  'X': [
    [1, , , , 1],
    [, 1, , 1],
    [, , 1],
    [, 1, , 1],
    [1, , , , 1]
  ],
  'Y': [
    [1, , 1],
    [1, , 1],
    [, 1],
    [, 1],
    [, 1]
  ],
  'Z': [
    [1, 1, 1, 1, 1],
    [, , , 1],
    [, , 1],
    [, 1],
    [1, 1, 1, 1, 1]
  ],
  '0': [
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1]
  ],
  '1': [
    [, 1],
    [, 1],
    [, 1],
    [, 1],
    [, 1]
  ],
  '2': [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1]
  ],
  '3': [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  '4': [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  '5': [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  '6': [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  '7': [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  '8': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  '9': [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ],
  ' ': [
    [, , ],
    [, , ],
    [, , ],
    [, , ],
    [, , ]
  ],
  '-': [
    [, , ],
    [, , ],
    [1, 1, 1],
    [, , ],
    [, , ]
  ],
  '!': [
    [, 1 ],
    [, 1 ],
    [, 1 ],
    [, , ],
    [, 1 ]
  ],
  '?': [
    [, 1, 1, 1],
    [, , , 1],
    [, , 1],
    [, , ],
    [, , 1]
  ],
  ':': [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
}
kontra.init('game')
const canvas = kontra.canvas
const context = kontra.context
function draw (posX, posY, string, size) {
  context.clearRect(posX, posY, canvas.width, canvas.height)
  var needed = []
  string = string.toUpperCase() // because I only did uppercase letters
  for (var i = 0; i < string.length; i++) {
    var letter = letters[string.charAt(i)]
    if (letter) { // because there's letters I didn't do
      needed.push(letter)
    }
  }
  context.fillStyle = 'white'
  var currX = posX
  for (i = 0; i < needed.length; i++) {
    letter = needed[i]
    var currY = posY
    var addX = 0
    for (var y = 0; y < letter.length; y++) {
      var row = letter[y]
      for (var x = 0; x < row.length; x++) {
        if (row[x]) {
          context.fillRect(currX + x * size, currY, size, size)
        }
      }
      addX = Math.max(addX, row.length * size)
      currY += size
    }
    currX += size + addX
  }
}

// Save the highscore
kontra.store.set('highscore', 0)

let highscore = kontra.sprite({
  render: function () {
    // draw (x, y, text, size)
    draw(15, 15, `Days:${kontra.store.get('highscore')}`, 10)
  }

})

let stats = kontra.sprite({
  render: function () {
    draw(1000,15, 'STATS', 10)
  }
})

let mainImage = kontra.sprite({
  x: 330,
  y: 120,
  width: 470,
  height: 550
})

let loop = kontra.gameLoop({ // create the main game loop
  update () { // update the game state
    highscore.update()
  },
  render () { // render the game state
    highscore.render()
    mainImage.render(),
    stats.render()
  }
})

kontra.keys.bind('p', () => {
  loop.stop()
})

loop.start() // start the game
