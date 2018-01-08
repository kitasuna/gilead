const test = require('ava').test
const S = require('sanctuary')
const G = require('./../src/index.js')
const responses = require('./fixtures/index.js')

test('rightToSanc returns a Sanctuary Right when given a Right from Purescript', t => {
  const obj = JSON.parse(responses.psRight)
  const sRight = G.right(obj)
  t.true(S.isRight(sRight), 'obj was not parsed into a Right')
})

test('leftToSanc returns a Sanctuary Left when given a left from Purescript', t => {
  const obj = JSON.parse(responses.psLeft)
  const sLeft = G.left(obj)
  t.true(S.isRight(sLeft), 'obj was not parsed into a Left')
})

test.only('either returns a Sanctuary Right when given an obj with the constructor name `Right`', t => {
  console.dir(responses)
  console.dir('^^^ responses')
  console.dir(responses.psRight)
  const sRight = G.either(responses.psRight)
  t.true(S.isRight(sRight))
})
