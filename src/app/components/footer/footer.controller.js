(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['$http'];

        function FooterController($http) {
            var vm = this;

            vm.submit = function() {
                console.log('!', vm.subscriber);
            }

            return vm;
        }
})();