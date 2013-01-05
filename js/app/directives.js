angular.module('directives', [])
    .directive('questionnaires', function () {
        return {
            restrict: 'E',
            scope: { questionnaires: '=questionnairesData'},
            transclude: true,
            replace: true,
            templateUrl: 'js/app/templates/questionnaires.html',
            controller: function ($scope, $http, $attrs) {
                
            }
        }
    });