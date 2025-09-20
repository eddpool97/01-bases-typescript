"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = true; }
        if (upper) {
            return (firstName + " " + lastName).toUpperCase();
        }
        return firstName + " " + lastName;
    };
    var name = fullName('Parker');
    console.log(name);
})();
