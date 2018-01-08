const S = require('sanctuary')

const right = (r) => S.Right(r)

const left = (l) => S.Left(l)

const either = (e) => {
    console.log(e)
    console.log('^^^ e')
    if(e.constructor.name == 'Right') {
      return right(e)
    } else if (e.constructor.name == 'Left') {
      return left(e)
    }
}

module.exports = {
  right,

  left,

  either
}
