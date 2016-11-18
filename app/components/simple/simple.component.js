(function() {
    "use strict";

    angular
        .module("simpleModule")
        .component('simple', {
            // template: 'Hello'
            templateUrl: 'components/simple/simple.html',
            controller: 'Simple',
            controllerAs: 'ctrl'
        });

})();