angular.module('anglober.services', ['ui.bootstrap']);
angular.module('anglober.controllers', ['anglober.services']);

var app = angular.module('anglober', ['anglober.controllers', 'anglober.services', 'anglober.directives']);