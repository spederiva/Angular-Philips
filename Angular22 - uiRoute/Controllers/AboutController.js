(function(angular)
{
    var controller = function ($scope, $state, $rootScope, $stateParams) {
        $scope.copyRight = 'Angular course';
        $scope.stateParams = $stateParams;
        $scope.goBackHome = function () {
            $state.go('Home');
        };

        $rootScope.$on('$stateChangeSuccess', function (sender, args) {
            $rootScope.currentState = args.name;
        });

        $rootScope.$on('$stateChangeError', function (sender, args) {
            console.error(args);
        });
    };
    angular.module('uiRouterDemo').controller('aboutController', ['$scope', '$state',
        '$rootScope','$stateParams', controller]);
}(window.angular))