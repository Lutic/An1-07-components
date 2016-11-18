(function() {
    "use strict";

    angular
        .module("simpleModule")
        .controller('simple', Simple);

    function Simple() {
        let ctrl = this;

        ctrl.header = 'Hello!'

        ctrl.hello = function () {
            alert('Hello');
        }
    }

})();