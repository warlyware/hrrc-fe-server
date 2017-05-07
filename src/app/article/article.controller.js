(function() {

angular
    .module('hrrc-app.article')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$timeout', '$stateParams', '$mdMedia', 'ArticleService'];

    function ArticleController($scope, $timeout, $stateParams, $mdMedia, ArticleService) {
        var vm = this;
        vm.article = {};
        vm.$mdMedia = $mdMedia;

        ArticleService.getArticleBySlug($stateParams.articleId).then(function(data) {
            var regex = /<strong>(.*?)<\/strong>/g;
            vm.article = data;
            vm.author = regex.exec(data.content.brief)[1];
        });

        return vm;
    };

})();