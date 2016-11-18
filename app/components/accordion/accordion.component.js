(function() {
    "use strict";

    angular
        .module("accordionModule")
        .component('accordion', {
            templateUrl: 'components/accordion/accordion.html',
            controller: 'Accordion',
            transclude: true
        });

})();