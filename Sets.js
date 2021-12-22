const ids = new Set([11, 22, 33, 44, 55, 66, 77, 88, 99]);

ids.add('abc')
ids.add('bb2')
ids.add('bb3')
ids.add('bb4')
ids.add('bb5')

for (const el of ids) {
    console.log(el)
}
console.log(ids[1]) // undefined

console.log(ids.has('abc')) // true

ids.delete('abc')
console.log(ids.has('abc')) // false

