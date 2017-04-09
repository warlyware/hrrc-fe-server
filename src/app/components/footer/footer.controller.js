(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['$http'];

        function FooterController($http) {
            var vm = this;

            vm.submit = function() {
                $http.post('/email/submit', vm.subscriber)
                .catch(function(err) {
                    console.error(err);
                });
            }

            return vm;
        }
})();