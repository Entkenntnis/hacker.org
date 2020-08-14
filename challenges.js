const bcrypt = require('bcryptjs')

function checkSolution(hash) {
  return async (answer) => {
    answer = answer.toLowerCase()
    const correct = await bcrypt.compare(answer, hash)
    return { answer, correct }
  }
}

function stringreverse(s) {
  return s.split('').reverse().join('')
}

module.exports = [
  {
    id: 96,
    pos: { x: 415, y: 230 },
    title: 'Start',
    deps: [],
    html: `
      <p>Welcome! This is an homage to <a href="https://www.hacker.org/">hacker.org</a>, where I've spent a lot of time. I am especially fascinated by the challenges and want you to enjoy them as well.
      </p>
      
      <p>Start your adventure now. Your answer is 6 + 4 * 9.
      </p>
    `,
    check: checkSolution('$2y$06$iuFxVtpYYfeKY3GDjufu1er/nDMg9fY7YwgIrSztP4qGDtnBDsDsK'),
  },
  {
    id: 105,
    pos: { x: 330, y: 105 },
    title: 'Didactic Byte',
    deps: [96],
    html: `
      <p>Understanding bits and bytes is key to a hacker's foundation. Let us take the following decimal number:</p>
      
      <p><code>233</code></p>
      
      <p>This number can just fit in one byte. How would you write it in hexidecimal? (Sometimes people write hex numbers with a '0x' prefix, but here just give the digits, please.)</p>
    `,
    check: checkSolution('$2y$06$oL8EAnh91TLWNo1GcGA3T.45xIxPFEM7y9cUnJ1sb7IoFpGoqBCQe')
  },
  {
    id: 17,
    pos: { x: 390, y: 295 },
    title: 'Who Goes there?',
    deps: [96],
    html: `
      <p>What is your name on hacker.org?</p>
    `,
    check: (answer, { req }) => {
      const reversed = stringreverse(answer)
      return {
        answer: reversed,
        correct: reversed == req.user.name,
      }
    },
  },
  {
    id: 10,
    pos: { x: 480, y: 375 },
    title: 'Visible Ink',
    deps: [96],
    html: `
      <p>The answer is right below this line... can you see it?<br>
      <span style="color:#191919">squint</span></p>
    `,
    check: checkSolution('$2y$06$I8oYbLKvNThIlomcV/bMCuiHR/vQ9gKwJqj3fFNqg8JeeBTd87o5W')
  },
  {
    id: 106,
    pos: { x: 200, y: 125 },
    title: 'Didactic Bytes',
    deps: [105],
    html: `
      <p>Let us take the following three decimal numbers:</p>
      
      <p><code>199, 77, 202</code></p>
    
      <p>Convert each one into a byte. (Even though 77 does not require all 8 bits to express itself, when dealing with a group of data, we usually keep it in a consistent form.) Now, take those three bytes and combine them to form a 24-bit unsigned integer. The 199 byte is the high byte (most significant) and so forth. Please enter that 24-bit integer in decimal form, and that is your answer. (Hint: your answer will not be '19977202'!) 
      </p>
    
    `,
    check: checkSolution('$2y$06$4qCGCQWnoLoqGFiI2EDvpO0zfzddkoKlmi5VR2kewvpIWLVdKVz82')
  },
  {
    id: 103,
    pos: { x: 125, y: 195 },
    title: 'Didactic RGB',
    deps: [106],
    html: `
      <p>Do you see the single-color image below?</p>
      
      <p><img src="/chals/didactrgb.png" width=64 height=64></p>
    
      <p>This image is actually only 1 pixel by 1 pixel, and is stretched out here so you can see it. What can such an image represent? Pixels are commonly composed on a computer of red, green, and blue components. Each component can be any number of bits -- the more bits, the more detail an image can reflect. A common number of bits per color is eight. If we look at this single pixel, we get three colors of eight bits each, which equals 24 bits of data total. What to do with those 24 bits? For this challenge, express it as a decimal integer. That is your answer. (In other words, the answer looks something like '12345678'. These are all 24 bits considered as one single number in decimal.)
      </p>
    
    `,
    check: checkSolution('$2y$06$JHlDNLWHbhPkWEm4FvskKu4sYsCoB/wSD7/LuwLOopOpEXLYZxXXm')
  },
  {
    id: 104,
    pos: { x: 105, y: 275 },
    title: 'Didactic Red',
    deps: [103],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
  {
    id: 107,
    pos: { x: 95, y: 380 },
    title: 'Didactic Green',
    deps: [104],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
  {
    id: 272,
    pos: { x: 45, y: 315 },
    title: 'Didactic Blue',
    deps: [107],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
  {
    id: 136,
    pos: { x: 175, y: 250 },
    title: 'Didactic Bits',
    deps: [106],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
  {
    id: 132,
    pos: { x: 195, y: 305 },
    title: 'Didactic Text 3',
    deps: [136/*, 127*/],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
  {
    id: 205,
    pos: { x: 130, y: 340 },
    title: 'Didactic Text 4',
    deps: [132],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
]
