(function() {

angular
    .module('hrrc-app')
    .config(config);

    config.injector = ['$locationProvider', '$mdThemingProvider'];

    function config($locationProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default').primaryPalette('indigo').warnPalette('orange');

        $mdThemingProvider.theme('darkTheme').primaryPalette('indigo').warnPalette('orange').dark();
    };

})();
