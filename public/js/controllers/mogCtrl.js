angular.module('NodeGlober.controllers', [])
    .controller('mogCtrl', ['$scope', 'mogService', function ($scope, mogService) {

        $scope.topMogs;

        $scope.loadTopMogs = function() {

        mogService.getTopMogs()
            .success(function (mogs) {
                $scope.topMogs = mogs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load mog data: ' + error.message;
            });

        };


    }]);