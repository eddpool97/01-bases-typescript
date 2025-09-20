"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo esta salvado!"; };
    //tipo de dato Function
    var myFunction;
    /* myFunction = 10;
    console.log( myFunction ); */
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    /*
    myFunction = greet;
    console.log( myFunction('Edwin') );

    myFunction = saveTheWorld;
    console.log( myFunction() ); */
})();
