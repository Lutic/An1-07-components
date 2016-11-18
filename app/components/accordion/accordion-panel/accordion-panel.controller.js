(function() {
  "use strict";

  angular
    .module("accordionModule")
    .controller('AccordionPanel', AccordionPanel);

  function AccordionPanel() {
    let $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.parent.addPanel($ctrl);
    }

    $ctrl.selected = false;

    $ctrl.turnOn = function () {
      return $ctrl.selected = true;
    }
    $ctrl.turnOff = function () {
      return $ctrl.selected = false;
    }

    $ctrl.select = function () {
      $ctrl.parent.selectPanel($ctrl);
    }

  }

})();