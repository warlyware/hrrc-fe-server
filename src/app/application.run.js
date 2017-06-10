(function() {

angular
    .module('hrrc-app')
    .run(run);

    run.$injector = ['$rootScope', '$window', '$location'];

    function run($rootScope, $window, $location) {
        $rootScope.$on('$stateChangeSuccess', function() {
            $window.scrollTo(0, 0);
            $window.ga('send', 'pageview', $location.path());
        });
    }

})();