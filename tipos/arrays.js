"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 8, 7, 8, 9, 10];
    console.log(numbers);
    numbers.push(11);
    console.log(numbers);
    var villian = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    numbers.forEach(function (number) { return console.log("El numero ahora es " + number); });
    villian.forEach(function (villian) { return console.log("El villano ahora es " + villian); });
})();
