(function() {
    "use strict";

    angular
        .module("accordionModule")
        .controller('Accordion', Accordion);

    function Accordion() {
        let $ctrl = this,
            panels = [];

        $ctrl.addPanel = function (panel) {
            panels.push(panel);
            if (panels.length > 0) {
                panels[0].turnOn();
            }
        }

        $ctrl.selectPanel = function (panel) {
            for (let p of panels) {
                if (p === panel) {
                    p.turnOn();
                } else {
                    p.turnOff();
                }
            }
        }


    }

})();