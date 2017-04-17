(function() {

angular
    .module('hrrc-app')
    .config(config);

    config.injector = ['$locationProvider', '$mdThemingProvider'];

    function config($locationProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default').primaryPalette('grey').warnPalette('orange');

        $mdThemingProvider.theme('darkTheme').primaryPalette('grey').warnPalette('orange').dark();
    };

})();
