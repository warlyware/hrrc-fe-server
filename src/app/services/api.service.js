(function() {
    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ApiService', ApiService);

        ApiService.$inject = ['$http'];

        function ApiService($http) {
            var apiBaseUrl = '//admin.humanrightsrc.org/api';

            return {
                getPosts,
                getPostsByCategory
            }

            function getPosts() {
                return $http.get(apiBaseUrl + '/post/list').then(function(res) {
                    return res.data;
                });
            }

            function getPostsByCategory(category) {
                return $http.get(apiBaseUrl + `/post-by-category/${category}`).then(function(res) {
                    return res.data;
                });
            }
        }
})();
