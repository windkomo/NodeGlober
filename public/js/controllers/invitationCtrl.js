angular.module('anglober.controllers').controller('invitationCtrl', ['$scope', 'modalService', function ($scope, modalService) {

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
            templateUrl: 'js/invitationModal.html',
            scope: $scope
        };

        $scope.openInvitation = function() {
            initializeModal();
            modalService.showModal(modalParameters, modalOptions);
        };

        function initializeModal()
        {
            $scope.emails = [];
            $scope.emails.push({'value':''});
        }

        initializeModal();


}]);