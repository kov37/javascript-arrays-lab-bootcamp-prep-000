var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
  var newarr = [...kittens, name]
  return newarr
}

function prependKitten(name) {
  var newarr = [name, ...kittens]
  return newarr
}

function removeLastKitten() {
  var newarr = kittens.splice(0, kittens.length - 1)
  return newarr
}

function removeFirstKitten(name) {
  var newarr = kittens.splice(1, kittens.length)}
  return newarr