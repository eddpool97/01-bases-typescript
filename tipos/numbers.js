"use strict";
(function () {
    var avengers = 25;
    console.log({ avengers: avengers });
    var villians = 15;
    console.log({ villians: villians });
    console.log('\n----------------\n');
    console.log(typeof avengers);
    console.log(typeof villians);
    console.log('\n----------------\n');
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
})();
