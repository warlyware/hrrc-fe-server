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
                getPostsByCategory,
                getPostBySlug,
                getPostById
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

            function getPostBySlug(slug) {
                return $http.get(apiBaseUrl + `/post/${slug}`).then(function(res) {
                    return res.data;
                });
            }

            function getPostById(id) {
                return $http.get(apiBaseUrl + `/post/${id}`).then(function(res) {
                    return res.data;
                });
            }


        }
})();
