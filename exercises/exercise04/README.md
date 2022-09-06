# Feladatok

1. Írj egy generátor függvényt `indexGenerator` néven, amit egyedi indexek generálására használsz! 
A index értéke kezdetben 1 legyen, és a `next()` mindig eggyel nagyobb értéket adjon vissza! 

2. Írj egy generátor függvényt , ami a 2 hatványait adja vissza! Az első érték a 2 legyen!

3. Van egy előre megírt fibonacci generátor függvényed:
```javascript
    function *fibonacci() {
        let a = 1;
        let b = 1;
        while( true ) {
            [a, b] = [b, a+b];
            yield b;
        }
    }
```
A feladatod, hogy írj egy olyan generátor függvényt, ami a fibonacci generátor által visszaadott értékekből visszaadja a kapott érték négyzetét!