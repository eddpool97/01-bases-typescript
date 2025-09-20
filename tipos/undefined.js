"use strict";
(function () {
    var nothing = undefined;
    var otherNothing = null;
    console.log(nothing);
    console.log(otherNothing);
    if (nothing === otherNothing) {
        console.log(true);
    }
    else {
        console.log(false);
    }
})();
