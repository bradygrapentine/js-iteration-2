function main() {
  const colors = ['red', 'blue', 'green']
  const numbers = [1, 2, 3]

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  function _map(arr, fn) {
    let result = []
    arr.forEach(function (item) {
      const itemAfterTransformation = fn(item)
      result.push(itemAfterTransformation)
    })
    return result
  }

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  const _mapTest1 = _map(colors, function (color) {
    return color.toUpperCase()
  })
  console.log('Map Test 1: (printing original first)')
  console.log(colors)
  console.log(_mapTest1)

  // ------------------------------------------------------- //

  const _mapTest2 = _map(numbers, function (number) {
    return number * number
  })
  console.log('Map Test 2: (printing original first)')
  console.log(numbers)
  console.log(_mapTest2)

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  function _filter(arr, fn) {
    let result = []
    arr.forEach(function (item) {
      if (fn(item)) {
        result.push(item)
      }
    })
    return result
  }

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  const _filterTest1 = _filter(colors, function (color) {
    return color.length > 3
  })
  console.log('Filter Test 1:')
  console.log(_filterTest1)

  const _filterTest2 = _filter(colors, function (color) {
    return color.length > 10
  })
  console.log('Filter Test 2 (empty):')
  console.log(_filterTest2)

  // ------------------------------------------------------- //

  const _filterTest3 = _filter(numbers, function (number) {
    return number > 2
  })
  console.log('Filter Test 3:')
  console.log(_filterTest3)

  const _filterTest4 = _filter(numbers, function (number) {
    return number > 4
  })
  console.log('Filter Test 4 (empty):')
  console.log(_filterTest4)

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  function _every(arr, fn) {
    let result = true
    arr.forEach(function (item) {
      if (!fn(item)) {
        result = false
      }
    })
    return result
  }

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  const _everyTest1 = _every(colors, function (color) {
    return color.length > 0
  })
  console.log('Every Test 1:')
  console.log(_everyTest1)

  const _everyTest2 = _every(colors, function (color) {
    return color.length > 3
  })
  console.log('Every Test 2 (false):')
  console.log(_everyTest2)

  // ------------------------------------------------------- //

  const _everyTest3 = _every(numbers, function (number) {
    return number > 0
  })
  console.log('Every Test 3:')
  console.log(_everyTest3)

  const _everyTest4 = _every(numbers, function (number) {
    return number > 1
  })
  console.log('Every Test 4 (false):')
  console.log(_everyTest4)

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  function _some(arr, fn) {
    let result = false
    arr.forEach(function (item) {
      if (fn(item)) {
        result = true
      }
    })
    return result
  }

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //

  const _someTest1 = _some(colors, function (color) {
    return color === 'red'
  })
  console.log('Some Test 1:')
  console.log(_someTest1)

  const _someTest2 = _some(colors, function (color) {
    return color === 'yellow'
  })
  console.log('Some Test 2 (false):')
  console.log(_someTest2)

  // ------------------------------------------------------- //

  const _someTest3 = _some(numbers, function (number) {
    return number === 2
  })
  console.log('Some Test 3:')
  console.log(_someTest3)

  const _someTest4 = _some(numbers, function (number) {
    return number === 5
  })
  console.log('Some Test 4 (false):')
  console.log(_someTest4)

  // ------------------------------------------------------- //
  // ------------------------------------------------------- //
}

document.addEventListener('DOMContentLoaded', main)

// function _reduce(arr, initial, fn) {
//   let total = initial
//   arr.forEach(function (item) {
//     total = fn(total, item)
//   })
//   return total
// }

// // ------------------------------------------------------- //
// // ------------------------------------------------------- //
// let total = 0
// const _reduceTest1 = _reduce(numbers, total, function (number) {
//   return (total += number)
// })
// console.log('Reduce Test 1:')
// console.log(_reduceTest1)

// // ------------------------------------------------------- //

// const _reduceTest2 = _reduce(numbers, function (number) {
//   return number * number
// })
// console.log('Reduce Test 2:')
// console.log(_reduceTest2)

// ------------------------------------------------------- //
// ------------------------------------------------------- //
// ------------------------------------------------------- //
