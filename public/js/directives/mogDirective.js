/**
 * Created by Komo on 19/10/2014.
 */

angular.module('anglober.directives', []).directive('myDomDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});
angular.module('anglober.directives').directive('topMogs', function () {
    return {
        restrict : 'E',
        templateUrl: 'js/directives/templates/topMogs.tpl.html'
    };
});