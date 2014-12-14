/**
 * Created by Komo on 14/12/2014.
 */

angular.module('anglober.directives').directive('ajaxLoader', function () {
    return {
        restrict : 'E',
        templateUrl: 'js/directives/templates/ajaxLoader.tpl.html'
    };
});