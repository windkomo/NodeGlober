/**
 * Created by Komo on 12/10/2014.
 */

angular.module('anglober.services',[]).factory('mogService', ['$http', function($http) {

    var mogService = {};
    var urlBase = '/topmogs';

    mogService.getTopMogs = function(){
    return $http.get(urlBase);

    };

    return mogService;
}]);
