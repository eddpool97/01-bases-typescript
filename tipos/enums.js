"use strict";
(function () {
    var AudiLevel;
    (function (AudiLevel) {
        AudiLevel[AudiLevel["min"] = 0] = "min";
        AudiLevel[AudiLevel["medium"] = 1] = "medium";
        AudiLevel[AudiLevel["max"] = 2] = "max";
    })(AudiLevel || (AudiLevel = {}));
    var currentAudio = AudiLevel.medium;
    console.log(AudiLevel);
})();
