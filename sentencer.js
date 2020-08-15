// FROM https://github.com/kylestetz/metaphorpsum, MIT

const Sentencer = require('sentencer')

module.exports = { generate, generateSmall }

function generateSmall() {
  return capitalizeFirstLetter(
    Sentencer.make('{{ a_noun }} is {{ an_adjective }} {{ noun }}.')
  )
}

function generate(numberOfSentences) {
  var sentences = ''
  var i = 0
  for (i; i < numberOfSentences; i++) {
    sentences +=
      capitalizeFirstLetter(
        randomStartingPhrase() + makeSentenceFromTemplate()
      ) + '.'
    sentences += numberOfSentences > 1 ? ' ' : ''
  }
  return sentences
}

function makeSentenceFromTemplate() {
  return Sentencer.make(
    sentenceTemplates[Math.floor(Math.random() * sentenceTemplates.length)]
  )
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// returns a starting phrase about a third of the time, otherwise it's empty
function randomStartingPhrase() {
  if (Math.random() < 0.33) {
    return phrases[Math.floor(Math.random() * phrases.length)]
  }
  return ''
}

// style guide: no periods, no first capital letters.
var sentenceTemplates = [
  'the {{ noun }} is {{ a_noun }}',
  '{{ a_noun }} is {{ an_adjective }} {{ noun }}',
  'the first {{ adjective }} {{ noun }} is, in its own way, {{ a_noun }}',
  'their {{ noun }} was, in this moment, {{ an_adjective }} {{ noun }}',
  '{{ a_noun }} is {{ a_noun }} from the right perspective',
  'the literature would have us believe that {{ an_adjective }} {{ noun }} is not but {{ a_noun }}',
  '{{ an_adjective }} {{ noun }} is {{ a_noun }} of the mind',
  'the {{ adjective }} {{ noun }} reveals itself as {{ an_adjective }} {{ noun }} to those who look',
  'authors often misinterpret the {{ noun }} as {{ an_adjective }} {{ noun }}, when in actuality it feels more like {{ an_adjective}} {{ noun }}',
  'we can assume that any instance of {{ a_noun }} can be construed as {{ an_adjective }} {{ noun }}',
  'they were lost without the {{ adjective }} {{ noun }} that composed their {{ noun }}',
  'the {{ adjective }} {{ noun }} comes from {{ an_adjective }} {{ noun }}',
  '{{ a_noun }} can hardly be considered {{ an_adjective }} {{ noun }} without also being {{ a_noun }}',
  "few can name {{ an_adjective }} {{ noun }} that isn't {{ an_adjective }} {{ noun }}",
  'some posit the {{ adjective }} {{ noun }} to be less than {{ adjective }}',
  '{{ a_noun }} of the {{ noun }} is assumed to be {{ an_adjective }} {{ noun }}',
  '{{ a_noun }} sees {{ a_noun }} as {{ an_adjective }} {{ noun }}',
  'the {{ noun }} of {{ a_noun }} becomes {{ an_adjective }} {{ noun }}',
  "{{ a_noun }} is {{ a_noun }}'s {{ noun }}",
  '{{ a_noun }} is the {{ noun }} of {{ a_noun }}',
  "{{ an_adjective }} {{ noun }}'s {{ noun }} comes with it the thought that the {{ adjective }} {{ noun }} is {{ a_noun }}",
  '{{ nouns }} are {{ adjective }} {{ nouns }}',
  '{{ adjective }} {{ nouns }} show us how {{ nouns }} can be {{ nouns }}',
  'before {{ nouns }}, {{ nouns }} were only {{ nouns }}',
  'those {{ nouns }} are nothing more than {{ nouns }}',
  'some {{ adjective }} {{ nouns }} are thought of simply as {{ nouns }}',
  'one cannot separate {{ nouns }} from {{ adjective }} {{ nouns }}',
  'the {{ nouns }} could be said to resemble {{ adjective }} {{ nouns }}',
  '{{ an_adjective }} {{ noun }} without {{ nouns }} is truly a {{ noun }} of {{ adjective }} {{ nouns }}',
]

// partial phrases to start with. Capitalized.
var phrases = [
  'To be more specific, ',
  'In recent years, ',
  'However, ',
  'Some assert that ',
  'If this was somewhat unclear, ',
  'Unfortunately, that is wrong; on the contrary, ',
  'This could be, or perhaps ',
  'This is not to discredit the idea that ',
  'We know that ',
  "It's an undeniable fact, really; ",
  'Framed in a different way, ',
  "What we don't know for sure is whether or not ",
  'As far as we can estimate, ',
  'The zeitgeist contends that ',
  'Though we assume the latter, ',
  'Far from the truth, ',
  'Extending this logic, ',
  'Nowhere is it disputed that ',
  'In modern times ',
  'In ancient times ',
  'Recent controversy aside, ',
]
