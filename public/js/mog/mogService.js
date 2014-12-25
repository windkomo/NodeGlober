/**
 * Created by Komo on 12/10/2014.
 */

angular.module('anglober.services').factory('mogService', ['$http', 'UP_CONFIG', function($http, UPCONFIG) {

    var mogService = {};
    var urlBase = UPCONFIG.nodePath + 'topmogs';

    mogService.getTopMogs = function(){
    return $http.get(urlBase);

    };

    return mogService;
}]);
