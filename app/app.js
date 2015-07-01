/**
 * Created by shawn on 5/29/15.
 *
 *
 */

(function() {

    var app = angular.module('blog',['ngRoute', 'blogControllers'])
        .config(['$routeProvider',
    function ($routeProvider){
        $routeProvider.
            when('/admin', {
                templateUrl: 'app/admin/admin.html',
                controller: 'adminController'
            }).
            when('/blog', {
                templateUrl: 'app/blogs/blog.html',
                controller: 'blogController'
            }).
            otherwise({
                redirect: '/blog'
            })
    }]);

} )();