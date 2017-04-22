(function() {

angular
    .module('hrrc-app.article')
    .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$timeout', '$stateParams', 'ArticleService'];

    function ArticleController($scope, $timeout, $stateParams, ArticleService) {
        var vm = this;
        vm.article = {};


        ArticleService.getArticleBySlug($stateParams.articleId).then(function(data) {
            var regex = /<strong>(.*?)<\/strong>/g;
            vm.article = data;
            vm.author = regex.exec(data.content.brief)[1];
            debugger;
        });

        return vm;
    };

})();