//decisionController = function ($scope) {
//    $scope.decisionQuestionnaires = [
//        { question: 'Why?', answer: ''},
//        { question: 'When?', answer: ''}
//    ];
//};

angular.module('decision', ['directives'])
    .controller('decisionController', ['$scope', function ($scope) {
        $scope.decisionQuestionnaires = [
            { question: 'Why?', answer: ''},
            { question: 'When?', answer: ''}
        ];
    }]);
