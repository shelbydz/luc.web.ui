/**
 *
 * Created by shawn on 5/29/15.
 */

(function() {

    var lucController = angular.module('lucController',[]);

    lucController.controller('dataController', ['$http',
        function(http){
            var self = this;
            self.message = 'data';
        }
    ]);

    lucController.controller('adminController', ['$http',
        function(http){
            var self = this;
            self.message = 'admin';
        }
    ]);
})();
