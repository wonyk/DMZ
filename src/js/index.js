/* eslint-disable standard/array-bracket-even-spacing */
/* eslint-disable no-sparse-arrays */
import '../../node_modules/kontra/kontra'
import { starting, common, rare } from '../data/data.json'
import TinyMusic from './tinyMusic'
const gameplayCards = require.context('../img', true)
const imagePath = (name) => gameplayCards(name, true)
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
/*
==============================================================================
INIT GAME
=============================================================================
*/

kontra.init('game')
const canvas = kontra.canvas
const context = kontra.context
// Thanks to Pixel Font for this library. Link: https://github.com/PaulBGD/PixelFont
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

// Audio Loading
// create the audio context
// Thanks to TinyMusic.js for this wonderful library and sample music =)
let ac = new AudioContext()
// get the current Web Audio timestamp (this is when playback should begin)

let when = ac.currentTime

// set the tempo
let tempo = 132
// initialize some lets
let sequence1
let sequence2
let sequence3

// create an array of "note strings" that can be passed to a sequence

let lead = [
  '-   e',
  'Bb3 e',
  'A3  e',
  'Bb3 e',
  'G3  e',
  'A3  e',
  'F3  e',
  'G3  e',

  'E3  e',
  'F3  e',
  'G3  e',
  'F3  e',
  'E3  e',
  'F3  e',
  'D3  q',

  '-   e',
  'Bb3 s',
  'A3  s',
  'Bb3 e',
  'G3  e',
  'A3  e',
  'G3  e',
  'F3  e',
  'G3  e',

  'E3  e',
  'F3  e',
  'G3  e',
  'F3  e',
  'E3  s',
  'F3  s',
  'E3  e',
  'D3  q'
]

let harmony = [
  '-   e',
  'D4  e',
  'C4  e',
  'D4  e',
  'Bb3 e',
  'C4  e',
  'A3  e',
  'Bb3 e',

  'G3  e',
  'A3  e',
  'Bb3 e',
  'A3  e',
  'G3  e',
  'A3  e',
  'F3  q',

  '-   e',
  'D4  s',
  'C4  s',
  'D4  e',
  'Bb3 e',
  'C4  e',
  'Bb3 e',
  'A3  e',
  'Bb3 e',

  'G3  e',
  'A3  e',
  'Bb3 e',
  'A3  e',
  'G3  s',
  'A3  s',
  'G3  e',
  'F3  q'
]

let bass = [
  'D3  q',
  '-   h',
  'D3  q',

  'A2  q',
  '-   h',
  'A2  q',

  'Bb2 q',
  '-   h',
  'Bb2 q',

  'F2  h',
  'A2  h'
]

// create 3 new sequences (one for lead, one for harmony, one for bass)
sequence1 = new TinyMusic.Sequence(ac, tempo, lead)
sequence2 = new TinyMusic.Sequence(ac, tempo, harmony)
sequence3 = new TinyMusic.Sequence(ac, tempo, bass)

// set staccato and smoothing values for maximum coolness
sequence1.staccato = 0
sequence1.smoothing = 0.5
sequence2.staccato = 0.55
sequence3.staccato = 0.05
sequence3.smoothing = 0.4

// adjust the levels so the bass and harmony aren't too loud
sequence1.gain.gain.value = 1.0
sequence2.gain.gain.value = 0.8
sequence3.gain.gain.value = 0.65

// apply EQ settings
sequence1.mid.frequency.value = 800
sequence1.mid.gain.value = 3
sequence2.mid.frequency.value = 1200
sequence3.mid.gain.value = 3
sequence3.bass.gain.value = 6
sequence3.bass.frequency.value = 80
sequence3.mid.gain.value = -6
sequence3.mid.frequency.value = 500
sequence3.treble.gain.value = -2
sequence3.treble.frequency.value = 1400

// Apply waveType
sequence1.waveType = 'sine'

// start the lead part immediately
sequence1.play(when)
// delay the harmony by 16 beats
sequence2.play(when + (60 / tempo) * 16)
// start the bass part immediately
sequence3.play(when)

/*
=======================================================================================
KONTRA browser constants and defaults
=======================================================================================
*/
let score = 0
let mainPicIndex = 0
// Creates shallow copy to prevent issues
let arrayCommon = common.slice(0)
let rareAppeared = false
let isRare = false
let gameEnded = false
let randomCardObject = {}
// Start with the rules card as a standard
randomCardObject = starting

/*
=====================================================================================
MAIN GAME FUNCTION
=====================================================================================
*/

// Change Card and Update Score
const changeCard = (selection) => {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
  console.log(arrayCommon.length)
  if (arrayCommon.length === 1) {
    arrayCommon = common.slice(0)
  }
  // For starting rule cards
  if (randomCardObject.title === 'Rules and Start Card') {
    mainPicIndex = getRandomInt(arrayCommon.length)
    randomCardObject = arrayCommon[mainPicIndex]
    image.src = imagePath(randomCardObject.src)
    return
  }
  // If it is one of the ending cards, do nothing
  if (!randomCardObject.title || gameEnded) {
    return
  }

  // Edit the Stats Bar then checked for issues
  serverBar.width += (randomCardObject[selection].server * 2)
  moneyBar.width += (randomCardObject[selection].money * 2)
  trustBar.width += (randomCardObject[selection].trust * 2)

  // Process higher limit
  if (serverBar.width > 200) {
    serverBar.width = 200
  }
  if (moneyBar.width > 200) {
    moneyBar.width = 200
  }
  if (trustBar.width > 200) {
    trustBar.width = 200
  }
  // Process lower limit
  if (trustBar.width <= 0) {
    trustBar.width = 0
    image.src = imagePath('./endTrust.jpg')
    gameEnded = true
  }
  if (serverBar.width <= 0) {
    serverBar.width = 0
    image.src = imagePath('./endServer.jpg')
    gameEnded = true
  }
  if (moneyBar.width <= 0) {
    moneyBar.width = 0
    image.src = imagePath('./endMoney.jpg')
    gameEnded = true
    // This part below comes only if the player have low health but not dead
  } else if (isRare) {
    mainPicIndex = getRandomInt(arrayCommon.length)
    score += randomCardObject.days
    randomCardObject = arrayCommon[mainPicIndex]
    image.src = imagePath(randomCardObject.src)
    isRare = false
  } else if ((trustBar.width <= 20 || moneyBar.width <= 20 || serverBar.width <= 20) && !rareAppeared) {
    // Some help so that players dont die too quickly
    arrayCommon.splice(mainPicIndex, 1)
    score += randomCardObject.days
    randomCardObject = rare
    image.src = imagePath(randomCardObject.src)
    rareAppeared = true
    isRare = true
  } else {
    arrayCommon.splice(mainPicIndex, 1)
    score += randomCardObject.days
    mainPicIndex = getRandomInt(arrayCommon.length)
    randomCardObject = arrayCommon[mainPicIndex]
    image.src = imagePath(randomCardObject.src)
  }
}

/*
========================================================================================
SPRITES and MISC
=======================================================================================
*/

let highscore = kontra.sprite({
  render: function () {
    // draw (x, y, text, size)
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

let helpWords = kontra.sprite({
  render: function () {
    draw(900, 630, 'MEH!', 5)
    draw(1120, 630, 'DEAL', 5)
  }
})

let image = new Image()
image.src = imagePath(randomCardObject.src)

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
    helpWords.render()
  }
})
// }

/*
  =======================================================================================
  KEYBOARD
  =======================================================================================
  */

kontra.keys.bind('left', (e) => {
  e.preventDefault()
  changeCard('meh')
})

kontra.keys.bind('right', (e) => {
  e.preventDefault()
  changeCard('deal')
})

kontra.keys.bind('enter', (e) => {
  e.preventDefault()
  if (gameEnded) {
    score = 0
    mainPicIndex = 0
    arrayCommon = common
    rareAppeared = false
    gameEnded = false
    randomCardObject = starting
    image.src = imagePath(randomCardObject.src)
    serverBar.width = 100
    moneyBar.width = 100
    trustBar.width = 100
  }
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
    changeCard('meh')
  }
  if (object === dealButton) {
    changeCard('deal')
  }
})

loop.start()
