(function() {
    var app = angular.module('pin', []);


    app.directive('pin', function() {
        return {
            restrict: 'A',
            scope: {
                pinConfig: '@'
            },
            link: function(scope, element, attrs) {
                $(element).pin(scope.$eval(scope.pinConfig));
            }
        }
    });
})();