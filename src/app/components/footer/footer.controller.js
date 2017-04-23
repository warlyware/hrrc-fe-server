(function() {
    'use strict';

    angular
        .module('hrrc-app.components')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['$scope', '$http', 'DialogService','$timeout'];

        function FooterController($scope, $http, DialogService, $timeout) {
            var vm = this;

            vm.submit = function() {
                $http.post('/email/submit', vm.subscriber).then(showSuccessDialog)
                .catch(showFailDialog)
                .finally(resetForm);
            }

            function showSuccessDialog() {
                DialogService.show({
                    title: 'Success',
                    textContent: 'Thank you for subscribing.',
                    ok: 'Close'
                });
                resetForm();
            }

            function showFailDialog(err) {
                console.error(err);
                DialogService.show({
                    title: 'Error',
                    textContent: 'There was a problem.  Please try again, or email us at founder.hrrc@gmail.com',
                    ok: 'Close'
                });
                resetForm();
            }

            function resetForm() {
                vm.subscriber = {};
                $scope.subscriberForm.$setPristine();
                $scope.subscriberForm.$setValidity();
                $scope.subscriberForm.$setUntouched();
            }

            return vm;
        }
})();