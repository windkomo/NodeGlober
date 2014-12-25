angular.module('anglober.controllers').controller('mogCtrl', ['$scope', 'mogService', 'modalService', function ($scope, mogService, modalService) {

       var loadTopMogs = $scope.loadTopMogs = function() {

        mogService.getTopMogs()
            .success(function (mogs) {
                $scope.topMogs = mogs;
                console.log(mogs);
            })
            .error(function (error) {
                $scope.status = 'Unable to load mog data: ' + error.message;
            });

        };

         loadTopMogs();

}]);