"use strict";
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
    console.log(heroName);
})();
