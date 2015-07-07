/**
 * Created by shawn on 5/29/15.
 *
 *
 */

(function() {

    var app = angular.module('blog',['ngRoute', 'lucController', 'ngGrid'])
        .config(['$routeProvider',
    function ($routeProvider){
        $routeProvider.
            when('/admin', {
                templateUrl: 'app/admin/admin.html',
                controller: 'adminController'
            }).
            when('/data', {
                templateUrl: 'app/data/data.html',
                controller: 'dataController'
            }).
            when('/results', {
                templateUrl: 'app/data/results.html',
                controller: 'resultsController'
        }).
            otherwise({
                redirect: '/results'
            })
    }]);

} )();