# Feladatok

1. Írj egy függvény kifejezést `request` néven, ami az alábbi függvény alakítja át úgy, hogy fetch-et használ, és try catch-es kivételkezelést!

```javascript
    function request(method, url){
        const xhttp = new XMLHttpRequest();
        xhr.onload = () => console.log('Request success')
        xhr.onerror = () => console.error('Request error');
        xhr.open(method, url);
        xhr.send();
    }
```

2. Írj egy `delay` nevű aszinkron függvényt, ami paraméterként kap egy számot, és egy callback functiont!
Az paraméternek megfelelő milliszekundum után lefuttatja a második paraméterként kapott callbacket!

3. Feladat 
- Adott 3 json fájl:  `users1`, `users2`, és `users3` névvel.  
- Mindegyik fájl felhasználók nevét, és életkorát tartalmazza az
- Írj egy függvény `request` néven, ami paraméterként vár egy http metódust, és egy útvonalat. 
- Ezután fetch kérést indít az adott erőforrás elérésére az adott metódussal.  
- Hibakezelés is legyen megvalósítva. Ha az adott erőforrás nem elérhető, próbálja meg még két alkalommal, tehát összesen háromszor elérni azt. 
- Két hívás között legyen 5 másodperc várakozási idő. 
- Ha harmadszorra sem lehet elérni az erőforrást, elég a konzolra kiírni a hibaüzenetet.  
- Indíts egymás után három kérést mind a 3 json file elérésére GET metódussal.
- A 3 json file tartalmát egyetlen JavaScript tömbbe merge-öld össze. 
- Ha bármelyik file nem volt elérhető, akkor csak az adott file tartalma ne szerepeljen az objektumban, a többié még igen. 
- Amennyiben minden kérés lefutott - hiba esetén az ismétlő kérések is - akkor a konzolra logold ki a users taralmát
- Nem szabad callback hell-nek lennie!    
- Az alábbi adatokat (és az ezekkel dolgozó függvényeket is) szervezd külön file-ba:
  - `delay`: az ismételt kérés elküldése előtti várakozási idő
  - `maxRetry`: próbálkozások száma
  - `retryCounter`: az eddigi újra próbálkozások száma,
  - `users`: a felhasználókat tartalmazó tömb,