(function() {

    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('DialogService', DialogService);

        DialogService.$inject = ['$mdDialog'];

        function DialogService($mdDialog) {
            return {
                show
            }

            function show(dialogOptions) {
                var alert = $mdDialog.alert(dialogOptions);
                $mdDialog.show(alert);
            }
        }

})();