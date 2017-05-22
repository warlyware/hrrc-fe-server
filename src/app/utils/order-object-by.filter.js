(function () {
    'use strict';

    angular
        .module('hrrc-app.utils')
        .filter('orderObjectBy', OrderObjectBy);

        function OrderObjectBy() {
            return function (items, field, reverse) {
                var filtered = [];
                angular.forEach(items, function (item) {
                    filtered.push(item);
                });
                filtered.sort(function (a, b) {
                    return (a[field] > b[field] ? 1 : -1);
                });
                if (reverse) filtered.reverse();
                return filtered;
            };
        }

})();