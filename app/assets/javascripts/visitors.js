(function() {
    "use strict";

    var visitorCenter = angular.module('VisitorCenter', ['ngResource']);

    visitorCenter.factory("Visitor", function($resource){
        return $resource("visitors/:id", {id: '@id'}, {
           index: {method: 'GET', isArray:true, responseType: 'json'},
            update: {method: 'PUT', responseType: 'json'}
        });
    });

    var visitorsCtrl = function ($scope, Visitor) {
        $scope.visitors = Visitor.index();
        console.log($scope.visitors);

        $scope.addVisitor = function () {
            var visitor = Visitor.save($scope.newVisitor);
            console.log("add");
            console.log(visitor);
            $scope.visitors.push(visitor);
            $scope.newVisitor = {};
        };

        $scope.deleteVisitor = function (index) {
            var visitor = $scope.visitors[index];
            console.log("delete");
            console.log(visitor);
            Visitor.delete(visitor);
            $scope.visitors.splice(index, 1);
        }
    };
    visitorsCtrl.$inject = ['$scope', 'Visitor'];
    visitorCenter.controller("visitorsCtrl", visitorsCtrl);

}());