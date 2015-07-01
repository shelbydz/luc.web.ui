/**
 *
 * Created by shawn on 5/29/15.
 */

(function() {

    var blogControllers = angular.module('blogControllers',[]);

    blogControllers.controller('blogController', ['$http',
        function(http){
            var self = this;
            self.message = 'blog';
        }

    ]);

    blogControllers.controller('adminController', ['$http',
        function(http){
            var self = this;
            self.message = 'admin';
        }
    ]);
})();
