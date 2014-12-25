angular.module('anglober.controllers').controller('invitationCtrl', ['$scope', 'modalService', '$templateCache', function ($scope, modalService, $templateCache) {

   $scope.invitationModal = {};
   $scope.ajaxModal = {};

    console.log($templateCache.get('js/invitation/invitationModal.html'));

        var maxInvites = 10;

        var modalOptions = {
            closeButtonText: 'Cancel',
            actionButtonText: 'Send invitations',
            headerText: 'Invite ',
            secondHeaderText: 'friends!',
            bodyText: 'Invite up to 10 friends by entering their e-mails :'
        };

        var modalParameters = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
       //     templateUrl: '/js/invitation/invitationModal.html',
            template: $templateCache.get("invitationModal.html"),
            scope: $scope
        };

        var invitationConfirmationOptions = {
            actionButtonText: 'Ok',
            headerText: 'Thank ',
            secondHeaderText: 'you!',
            bodyText: 'Your invitations have been sent successfully!'
        };

        var ajaxModalOptions = {
            actionButtonText: 'Ok',
            headerText: 'Please ',
            secondHeaderText: 'wait...',
            bodyText: 'Your invitations are being sent...'
        };

        var invitationConfirmationParameters = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            template: $templateCache.get("simpleModal.html"),
          //  templateUrl: 'js/modal/simpleModal.html',
            size: "sm",
            scope: $scope
        };

        var ajaxModalParameters = {
            backdrop: "static",
            keyboard: false,
            template: $templateCache.get("ajaxModal.html"),
          //  templateUrl: 'js/modal/ajaxModal.html',
            size: "sm",
            scope: $scope
        };



        $scope.openInvitation = function() {
            initializeModal();
            $scope.invitationModal = modalService.showModal(modalParameters, modalOptions);
        };

    $scope.sendInvitations = function(){
        $scope.ajaxModal = modalService.showModal(ajaxModalParameters, ajaxModalOptions);

        setTimeout(function () {
            $scope.ajaxModal.close();
            modalService.showModal(invitationConfirmationParameters, invitationConfirmationOptions);
        }, 2500);
    };

        $scope.checkInvite = function(index, form)
        {
            // Only process valid email

                // If empty and not last field, remove it
                if ($scope.invites[index].mail === '' && index < $scope.invites.length - 1) {
                    $scope.invites.splice(index, 1);
                    form.input.focusMe = true;
                    $scope.invites[index].hasFocus = true;
                }

                // If valid not empty mail, add a new invite field
                if ($scope.invites[$scope.invites.length - 1].mail && $scope.invites.length < maxInvites) {
                    $scope.invites.push({'mail':''});
                }
        };

        function initializeModal()
        {
            $scope.invites = [];
            $scope.invites.push({'mail':'', 'hasFocus' : true});
        }

        initializeModal();


}]);

angular.module('anglober.controllers').directive('focusMe', function($timeout, $parse) {
    return {
        //scope: true,   // optionally create a child scope
        link: function(scope, element, attrs) {
            var model = $parse(attrs.focusMe);
            scope.$watch(model, function(value) {
                if(value === true) {
                    $timeout(function() {
                        element[0].focus();
                    });
                }
            });
            // to address @blesh's comment, set attribute value to 'false'
            // on blur event:
            element.bind('blur', function() {
                scope.$apply(model.assign(scope, false));
            });
        }
    };
});
