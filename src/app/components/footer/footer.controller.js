(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['$http', 'DialogService'];

        function FooterController($http, DialogService) {
            var vm = this;

            vm.submit = function() {
                $http.post('/email/submit', vm.subscriber).then(showSuccessDialog)
                .catch(showFailDialog);
            }

            function showSuccessDialog() {
                DialogService.show({
                    title: 'Success',
                    textContent: 'Thank you for subscribing.',
                    ok: 'Close'
                });
            }

            function showFailDialog(err) {
                console.error(err);
                DialogService.show({
                    title: 'Error',
                    textContent: 'There was a problem.  Please try again, or email us at founder.hrrc@gmail.com',
                    ok: 'Close'
                });
            }

            return vm;
        }
})();