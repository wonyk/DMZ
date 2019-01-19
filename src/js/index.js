import '../../node_modules/kontra/kontra'
import test1 from '../img/test1.jpg'
import test2 from '../img/test2.jpg'
import { starting, common, rare } from '../data/data.json'
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

/*
=====================================================================================
File and image imports
=====================================================================================
*/
// kontra.assets.load(test1)
//   .then(function () {
//     startLoop()
//   }).catch(function (err) {
//     console.log(err)
//   })

/*
=======================================================================================
KONTRA browser constants and defaults
=======================================================================================
*/
let score = 0
let mainPicIndex = 0
let randomCardObject = {}

randomCardObject = common[0]

/*
========================================================================================
SPRITES and MISC
=======================================================================================
*/

let highscore = kontra.sprite({
  // update: function () {
  //   let a = kontra.store.get('highscore')
  //   kontra.store.set('highscore', a++)
  // },
  render: function () {
    // draw (x, y, text, size)
    // draw(15, 15, `Days:${kontra.store.get('highscore')}`, 10)
    draw(15, 15, `Days:${Math.round(score)}`, 10)
  }
})

let gameTitle = kontra.sprite({
  render: function () {
    draw(500, 15, 'DMZ', 10)
  }
})

let stats = kontra.sprite({
  render: function () {
    draw(970, 15, 'STATS', 10)
    draw(900, 160, 'Server', 4)
    draw(900, 220, 'Money', 4)
    draw(900, 280, 'Trust', 4)
  }
})

// The width of the bars are twice the length of the actual percentage, so we can do
// 0.5% deduction in the game
let serverBar = kontra.sprite({
  x: 1025,
  y: 165,
  color: 'red',
  width: 100,
  height: 15,
  render: function () {
    this.draw()
    this.context.strokeStyle = 'red'
    this.context.lineWidth = 1
    this.context.strokeRect(this.x, this.y, 200, this.height)
  }
})


let moneyBar = kontra.sprite({
  x: 1025,
  y: 225,
  color: 'gold',
  width: 100,
  height: 15,
  render: function () {
    this.draw()
    this.context.strokeStyle = 'gold'
    this.context.lineWidth = 1
    this.context.strokeRect(this.x, this.y, 200, this.height)
  }
})

let trustBar = kontra.sprite({
  x: 1025,
  y: 285,
  color: 'green',
  width: 100,
  height: 15,
  render: function () {
    this.draw()
    this.context.strokeStyle = 'green'
    this.context.lineWidth = 1
    this.context.strokeRect(this.x, this.y, 200, this.height)
  }
})

let hellNoButton = kontra.sprite({
  x: 845,
  y: 520,
  color: 'red',
  width: 175,
  height: 100
})

let dealButton = kontra.sprite({
  x: 1060,
  y: 520,
  color: 'green',
  width: 175,
  height: 100
})

let image = new Image()
image.src = test1

// setTimeout(function () {
//   image.src = test2
//   kontra.store.set('highscore', 1)
// }, 10000)
let mainImage = kontra.sprite({
  x: 330,
  y: 120,
  // width: 470,
  // height: 550,
  image
})

/*
========================================================================================
GAMELOOP
========================================================================================
*/
// let startLoop = function () {
let loop = kontra.gameLoop({ // create the main game loop
  // clearCanvas: false,
  fps: 20,
  update () { // update the game state
    // highscore.update()
    // serverBar.update()
  },
  render () { // render the game state
    highscore.render()
    gameTitle.render()
    mainImage.render()
    stats.render()
    serverBar.render()
    moneyBar.render()
    trustBar.render()
    hellNoButton.render()
    dealButton.render()
  }
})
// }

/*
  =======================================================================================
  KEYBOARD
  =======================================================================================
  */
// kontra.keys.bind('p', () => {
//   loop.stop()
// })

kontra.keys.bind('left', (e) => {
  e.preventDefault()
  kontra.store.set('highscore', 2)
  image.src = test2
})

/*
==========================================================================================
MOUSE / POINTER
============================================================================================
*/
kontra.pointer.track(hellNoButton)
kontra.pointer.track(dealButton)
kontra.pointer.onDown((event, object) => {
  if (object === hellNoButton) {
    serverBar.width += (randomCardObject.meh.server)
    score += randomCardObject.days
  }
  if (object === dealButton) {
    kontra.store.set('highscore', 5)
    image.src = test1
  }
})

loop.start()
