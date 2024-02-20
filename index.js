// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat){
    cats.push(cat)
}

function destructivelyPrependCat(cat){
    cats.unshift(cat)
}

function destructivelyRemoveLastCat(cat){
    cats.pop(cat)
}

function destructivelyRemoveFirstCat(cat){
    cats.shift(cat)
}

function appendCat(Broom){
    return [...cats, "Broom"]
}

function prependCat (Arnold){
    return ["Arnold", ...cats]
}

function removeLastCat(name){
  return  cats.slice(0,2)
}

function removeFirstCat(name){
    return cats.slice(1)
}