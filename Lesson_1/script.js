class GuessingGame {

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guess()
    }

    guess() {
        const check = Math.floor((this.min + (this.max - this.min)/2));
        console.log(check);
        return check
    }

    lower () {
        return (this.max = this.guess());
    }

    greater () {
        return (this.min = this.guess());
    }

    congrats () {
        alert('Угадали!')
    }
}

const guessingGame = new GuessingGame;
guessingGame.setRange(1234,9555);

//////////////////////////////////////////////////////////////////////////////

let number = +prompt('Введите число');
let arr = [number];

while(number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
            arr.push(number)
        } else if(number % 2 !== 0) {
            number = number * 3 + 1;
            arr.push(number)
        }
    }

function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}

alert(`Результат:

Последовательность: ${arr.join(' ')}
Шагов ${arr.length - 1}
Вершина ${getMaxOfArray(arr)}`);













