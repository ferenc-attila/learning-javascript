function* indexGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

function* powerGenerator() {
    let id = 1;
    while (true) {
        yield 2**id++;
    }
}

const index = indexGenerator();
console.log(index.next());
console.log(index.next());
console.log(index.next());
console.log(index.next());

const power = powerGenerator();
console.log(power.next());
console.log(power.next());
console.log(power.next());
console.log(power.next());

function* fibonacciGenerator() {
    let a = 1;
    let b = 1;
    while (true) {
        b = b + a;
        a = b - a;
        yield b;
    }
}

const fibonacci = fibonacciGenerator();
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());