/////////////// Задание 1

const arrayForFill = []

while (arrayForFill.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10)

    if (!arrayForFill.includes(randomNumber)) {
        arrayForFill.push((randomNumber))
    }
}

console.log(arrayForFill)
arrayForFill.sort()
console.log(arrayForFill)


/////////////// Задание 2


const arrayForChange = []

while (arrayForChange.length < 10) {
    const randomNumber = Math.floor(Math.random() * 100)

    if (!arrayForChange.includes(randomNumber)) {
        arrayForChange.push((randomNumber))
    }
}

console.log(arrayForChange)

arrayForChange.forEach((item, i) => {
    if (item % 10 === 0) {
        arrayForChange[i] = arrayForChange[i].toString().replace('0', 'zero')
    }
})

console.log(arrayForChange)