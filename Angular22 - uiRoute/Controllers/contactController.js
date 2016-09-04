(function (angular) {
    var controller = function ($scope, $state, $rootScope, $stateParams) {
        
        $scope.contactId = $stateParams.id;

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
    angular.module('uiRouterDemo').controller('contactController', ['$scope', '$state',
        '$rootScope', '$stateParams', controller]);
}(window.angular))