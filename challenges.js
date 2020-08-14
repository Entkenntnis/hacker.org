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
      <span style="color:#191919">squint</font></p>
    `,
    check: checkSolution('$2y$06$I8oYbLKvNThIlomcV/bMCuiHR/vQ9gKwJqj3fFNqg8JeeBTd87o5W')
  },
]
