'use strict';
angular.module('anglober.constants', [])
    .constant("UP_CONFIG", {
        "nodePath": ""
    });

angular.module('anglober', []).run(function($templateCache,$http){
    $templateCache.put('first.html', 'First template');
    $templateCache.put('second.html', '<b>Second</b> template');
    $http.get('third.html', {cache:$templateCache});
});


angular.module('anglober.services', ['anglober.constants', 'ui.bootstrap']);
angular.module('anglober.controllers', ['anglober.services', 'ngAnimate']);
angular.module('anglober.directives', []);

var app = angular.module('anglober', ['anglober.controllers', 'anglober.services', 'anglober.directives']).run(function($templateCache, $http){
    //console.log($http.get(('js/invitation/invitationModal.html')));
    $http.get('js/invitation/invitationModal.html', {cache:$templateCache});
   /* $http.get('/js/modal/ajaxModal.html', {cache:$templateCache});
    $http.get('/js/modal/modalContent.html', {cache:$templateCache});
    $http.get('/js/modal/simpleModal.html', {cache:$templateCache});*/

  /*  $http.get('/invitation/invitationModal.html').success(function (data) {
        $templateCache.put('invitationModal.html', data);
    });*/
});


