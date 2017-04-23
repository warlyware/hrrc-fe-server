(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['$http', 'DialogService'];

        function FooterController($http, DialogService) {
            var vm = this;

            vm.submit = function() {
                $http.post('/email/submit', vm.subscriber)
                .catch(function(err) {
                    console.error(err);
                });
            }

            vm.showDialog = function() {
                DialogService.show();
            }

            return vm;
        }
})();